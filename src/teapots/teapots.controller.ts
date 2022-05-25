import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Body,
} from '@nestjs/common';
import { TeapotsService } from './teapots.service';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('teapots')
@Controller('teapots')
export class TeapotsController {
  constructor(private readonly teapotsService: TeapotsService) {}
}
