export * from './articles.service';
import { ArticlesService } from './articles.service';
export * from './comments.service';
import { CommentsService } from './comments.service';
export * from './favorites.service';
import { FavoritesService } from './favorites.service';
export * from './profile.service';
import { ProfileService } from './profile.service';
export * from './tags.service';
import { TagsService } from './tags.service';
export * from './userAndAuthentication.service';
import { UserAndAuthenticationService } from './userAndAuthentication.service';
export const APIS = [ArticlesService, CommentsService, FavoritesService, ProfileService, TagsService, UserAndAuthenticationService];