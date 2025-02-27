//Tiếp nhận các HTTP Request từ client (trình duyệt, API client, ứng dụng,...).
//Gọi đến service (PostsService) để xử lý logic.
//Trả về phản hồi (Response) về cho client. => xử lý các yêu cầu đến và gửi phản hồi lại cho máy khách.

import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';
import { PatchPostDto } from './dtos/patch-post.dto';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  /*
    Get localhost:3000/posts/:userId
  */
  @Get('/:userId')
  public getPosts(@Param('userId') userId: string) {
    return this.postsService.findAll(userId);
  }

  /*
  Structure of request body to create a new post
  ****************
  title: string 
  postType: enum(post,page, story, series)
  slug: string
  status: enum(draft, scheduled, review, punlished)
  content?: string
  schema?: string
  featuredImageUrl?: string 
  publishOn: Date
  tags: string[]
  metaOptions: [{key:value}]
  */
  @ApiOperation({
    summary: 'Creates a new blog post',
  })
  @ApiResponse({
    status: 201,
    description: 'You get a 201 response if your post is created successfully',
  })
  @Post()
  public createPost(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @ApiOperation({
    summary: 'Updates an existing blog post',
  })
  @ApiResponse({
    status: 200,
    description: 'A 200 response if the post is upadated successfully',
  })
  @Patch()
  public updatePost(@Body() patchPostsDto: PatchPostDto) {
    console.log(patchPostsDto);
  }

  @Delete()
  public deletePost(@Query('id', ParseIntPipe) id: number) {
    return this.postsService.delete(id);
  }
}
