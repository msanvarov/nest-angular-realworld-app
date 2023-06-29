import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeMainComponent } from './Bitakon/Home/home-main/home-main.component';
import { HomeTwoMainComponent } from './Bitakon/home-two/home-two-main/home-two-main.component';
import { HomeThreeMainComponent } from './Bitakon/home-three/home-three-main/home-three-main.component';
import { ShopMainComponent } from './Bitakon/shop/shop-main/shop-main.component';
import { ShopGridMainComponent } from './Bitakon/shop-grid/shop-grid-main/shop-grid-main.component';
import { ProductDetailsMainComponent } from './Bitakon/product-details/product-details-main/product-details-main.component';
import { ProductDetailsTabMainComponent } from './Bitakon/product-details-tab/product-details-tab-main/product-details-tab-main.component';
import { ProductDetailsGridMainComponent } from './Bitakon/product-details-grid/product-details-grid-main/product-details-grid-main.component';
import { ProductCaruselMainComponent } from './Bitakon/product-carusel/product-carusel-main/product-carusel-main.component';
import { ProductFiterMainComponent } from './Bitakon/product-filter/product-fiter-main/product-fiter-main.component';
import { ProductGridMainComponent } from './Bitakon/product-grid/product-grid-main/product-grid-main.component';
import { ProductListMainComponent } from './Bitakon/product-list/product-list-main/product-list-main.component';
import { ProductLiveMainComponent } from './Bitakon/product-live/product-live-main/product-live-main.component';
import { ProductLiveCaruselMainComponent } from './Bitakon/product-live-carusel/product-live-carusel-main/product-live-carusel-main.component';
import { ProductSimpleMainComponent } from './Bitakon/product-simple/product-simple-main/product-simple-main.component';
import { ProductTabMainComponent } from './Bitakon/product-tab/product-tab-main/product-tab-main.component';
import { AboutMainComponent } from './Bitakon/about/about-main/about-main.component';
import { ContactMainComponent } from './Bitakon/contact/contact-main/contact-main.component';
import { ActivityMainComponent } from './Bitakon/activity/activity-main/activity-main.component';
import { LoginMainComponent } from './Bitakon/login/login-main/login-main.component';
import { RegisterMainComponent } from './Bitakon/register/register-main/register-main.component';
import { EditProfileMainComponent } from './Bitakon/edit-profile/edit-profile-main/edit-profile-main.component';
import { BlogMainComponent } from './Bitakon/blog/blog-main/blog-main.component';
import { BlogDetailsMainComponent } from './Bitakon/blog-details/blog-details-main/blog-details-main.component';
import { RankingMainComponent } from './Bitakon/ranking/ranking-main/ranking-main.component';
import { UpcomingMainComponent } from './Bitakon/upcoming/upcoming-main/upcoming-main.component';
import { ForgetMainComponent } from './Bitakon/forget/forget-main/forget-main.component';
import { LiveAuctionMainComponent } from './Bitakon/live-auction/live-auction-main/live-auction-main.component';
import { CollectionMainComponent } from './Bitakon/collection/collection-main/collection-main.component';
import { CollectionGridMainComponent } from './Bitakon/collection-grid/collection-grid-main/collection-grid-main.component';
import { CollectionGridTwoMainComponent } from './Bitakon/collection-grid-two/collection-grid-two-main/collection-grid-two-main.component';
import { WalletMainComponent } from './Bitakon/wallet/wallet-main/wallet-main.component';
import { CreatorMainComponent } from './Bitakon/creator/creator-main/creator-main.component';
import { CreatorGridMainComponent } from './Bitakon/creator-grid/creator-grid-main/creator-grid-main.component';
import { CreatorListMainComponent } from './Bitakon/creator-list/creator-list-main/creator-list-main.component';
import { CreatorListTwoMainComponent } from './Bitakon/creator-list-two/creator-list-two-main/creator-list-two-main.component';
import { CreateItemMainComponent } from './Bitakon/create-item/create-item-main/create-item-main.component';
import { CreateSingleMainComponent } from './Bitakon/create-single/create-single-main/create-single-main.component';
import { CreateMultipleMainComponent } from './Bitakon/create-multiple/create-multiple-main/create-multiple-main.component';
import { ComingSoonMainComponent } from './Bitakon/coming-soon/coming-soon-main/coming-soon-main.component';
import { SupportMainComponent } from './Bitakon/support/support-main/support-main.component';
import { TermsMainComponent } from './Bitakon/terms/terms-main/terms-main.component';
import { PrivacyMainComponent } from './Bitakon/privacy/privacy-main/privacy-main.component';
import { MaintananceMainComponent } from './Bitakon/maintanance/maintanance-main/maintanance-main.component';
import { ErrorPageMainComponent } from './Bitakon/error-page/error-page-main/error-page-main.component';
import { ProfileMainComponent } from './Bitakon/profile/profile-main/profile-main.component';



const routes: Routes = [
  { path: '', component: HomeMainComponent },
  { path: 'home-two', component: HomeTwoMainComponent },
  { path: 'home-three', component: HomeThreeMainComponent },
  { path: 'shop', component: ShopMainComponent },
  { path: 'shop-grid', component: ShopGridMainComponent },
  { path: 'product-details', component: ProductDetailsMainComponent },
  { path: 'product-details-tab', component: ProductDetailsTabMainComponent },
  { path: 'product-details-grid', component: ProductDetailsGridMainComponent },
  { path: 'product-carusel', component: ProductCaruselMainComponent },
  { path: 'product-filter', component: ProductFiterMainComponent },
  { path: 'product-grid', component: ProductGridMainComponent },
  { path: 'product-list', component: ProductListMainComponent },
  { path: 'product-list', component: ProductListMainComponent },
  { path: 'product-live', component: ProductLiveMainComponent },
  { path: 'product-live-carusel', component: ProductLiveCaruselMainComponent },
  { path: 'product-simple', component: ProductSimpleMainComponent },
  { path: 'product-tab', component: ProductTabMainComponent },
  { path: 'about', component: AboutMainComponent },
  { path: 'contact', component: ContactMainComponent },
  { path: 'activity', component: ActivityMainComponent },
  { path: 'login', component: LoginMainComponent },
  { path: 'register', component: RegisterMainComponent },
  { path: 'edit-profile', component: EditProfileMainComponent },
  { path: 'blog', component: BlogMainComponent },
  { path: 'blog-details', component: BlogDetailsMainComponent },
  { path: 'ranking', component: RankingMainComponent },
  { path: 'upcoming', component: UpcomingMainComponent },
  { path: 'forget', component: ForgetMainComponent },
  { path: 'live-auction', component: LiveAuctionMainComponent },
  { path: 'collection', component: CollectionMainComponent },
  { path: 'collection-grid', component: CollectionGridMainComponent },
  { path: 'collection-grid-two', component: CollectionGridTwoMainComponent },
  { path: 'wallet', component: WalletMainComponent },
  { path: 'creator', component: CreatorMainComponent },
  { path: 'creator-grid', component: CreatorGridMainComponent },
  { path: 'creator-list', component: CreatorListMainComponent },
  { path: 'creator-list-two', component: CreatorListTwoMainComponent },
  { path: 'create', component: CreateItemMainComponent },
  { path: 'create-single', component: CreateSingleMainComponent },
  { path: 'create-multiple', component: CreateMultipleMainComponent },
  { path: 'coming-soon', component: ComingSoonMainComponent },
  { path: 'support', component: SupportMainComponent },
  { path: 'terms', component: TermsMainComponent },
  { path: 'privacy', component: PrivacyMainComponent },
  { path: 'maintaince', component: MaintananceMainComponent },
  { path: '404', component: ErrorPageMainComponent },
  { path: 'profile', component: ProfileMainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
