//xử lý logic nghiệp vụ

import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { TagsService } from 'src/tags/providers/tags.service';
import { PatchPostDto } from '../dtos/patch-post.dto';

// Là một decorator đánh dấu PostsService là một provider (service) có thể được tiêm (inject)
// vào các class khác (controller, service khác, ...).
@Injectable()
export class PostsService {
  constructor(
    private readonly usersService: UserService,

    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,

    @InjectRepository(MetaOption)
    public readonly meteOptionsRepository: Repository<MetaOption>,

    public readonly tagsService: TagsService,
  ) {}
  /**
   *Creating new posts
   */
  public async create(@Body() createPostDto: CreatePostDto) {
    //Find author from database based on authorID
    let author = await this.usersService.findOneById(createPostDto.authorId);
    //Find tags
    let tags = createPostDto.tags
      ? await this.tagsService.findMultipleTags(createPostDto.tags)
      : [];
    //Create post
    if (!author) {
      throw new NotFoundException('Author not found');
    }

    const post = this.postsRepository.create({
      ...createPostDto,
      author, // ✅ Bây giờ `author` chắc chắn không phải `null`
      tags: tags,
    });
    //Return the post
    return await this.postsRepository.save(post);
  }
  public async findAll(userId: string) {
    //
    let posts = await this.postsRepository.find({
      relations: {
        metaOptions: true,
        // author: true,
        //tags: true, sua code o post.entity
      },
    });

    return posts;
  }

  // public async create(patchPostDto: PatchPostDto) {}

  public async delete(id: number) {
    // //Delete the post
    await this.postsRepository.delete(id);

    //Confirmation
    return { deleted: true, id };
  }
}
