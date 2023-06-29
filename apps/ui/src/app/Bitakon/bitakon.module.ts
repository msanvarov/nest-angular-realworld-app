import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { RouterModule } from '@angular/router';
import { MetismenuAngularModule } from '@metismenu/angular';
import { ClipboardModule } from 'ngx-clipboard';
import { SwiperModule } from 'swiper/angular';

import { BlogRightSideComponent } from './Common/blog-right-side/blog-right-side.component';
import { BreadcrumbComponent } from './Common/breadcrumb/breadcrumb.component';
import { CommonFooterComponent } from './Common/common-footer/common-footer.component';
import { FooterTwoComponent } from './Common/footer-two/footer-two.component';
import { HeaderComponent } from './Common/header/header.component';
import { MarqueTextAreaComponent } from './Common/marque-text-area/marque-text-area.component';
import { PaginationComponent } from './Common/pagination/pagination.component';
import { ProductDetailsRightSideComponent } from './Common/product-details-right-side/product-details-right-side.component';
import { BidsAreaComponent } from './Home/bids-area/bids-area.component';
import { CollectionAreaComponent } from './Home/collection-area/collection-area.component';
import { CtaAreaComponent } from './Home/cta-area/cta-area.component';
import { FeaturesAreaComponent } from './Home/features-area/features-area.component';
import { FooterComponent } from './Home/footer/footer.component';
import { HomeHeroSliderComponent } from './Home/home-hero-slider/home-hero-slider.component';
import { HomeMainComponent } from './Home/home-main/home-main.component';
import { NftAreaComponent } from './Home/nft-area/nft-area.component';
import { PopularSellersComponent } from './Home/popular-sellers/popular-sellers.component';
import { AboutAreaComponent } from './about/about-area/about-area.component';
import { AboutBrandAreaComponent } from './about/about-brand-area/about-brand-area.component';
import { AboutFooterComponent } from './about/about-footer/about-footer.component';
import { AboutJoinAreaComponent } from './about/about-join-area/about-join-area.component';
import { AboutMainComponent } from './about/about-main/about-main.component';
import { AboutMarqueeComponent } from './about/about-marquee/about-marquee.component';
import { AboutMissionAreaComponent } from './about/about-mission-area/about-mission-area.component';
import { AboutTeamMembersComponent } from './about/about-team-members/about-team-members.component';
import { AboutVideoAreaComponent } from './about/about-video-area/about-video-area.component';
import { ActivityAreaComponent } from './activity/activity-area/activity-area.component';
import { ActivityMainComponent } from './activity/activity-main/activity-main.component';
import { BlogDetailsAreaComponent } from './blog-details/blog-details-area/blog-details-area.component';
import { BlogDetailsMainComponent } from './blog-details/blog-details-main/blog-details-main.component';
import { BlogAreaComponent } from './blog/blog-area/blog-area.component';
import { BlogMainComponent } from './blog/blog-main/blog-main.component';
import { CollectionGridTwoAreComponent } from './collection-grid-two/collection-grid-two-are/collection-grid-two-are.component';
import { CollectionGridTwoMainComponent } from './collection-grid-two/collection-grid-two-main/collection-grid-two-main.component';
import { CollectionGridAreaComponent } from './collection-grid/collection-grid-area/collection-grid-area.component';
import { CollectionGridMainComponent } from './collection-grid/collection-grid-main/collection-grid-main.component';
import { CollectionMainComponent } from './collection/collection-main/collection-main.component';
import { CollectionPageAreaComponent } from './collection/collection-page-area/collection-page-area.component';
import { ComingSoonMainComponent } from './coming-soon/coming-soon-main/coming-soon-main.component';
import { ContactAreaComponent } from './contact/contact-area/contact-area.component';
import { ContactMainComponent } from './contact/contact-main/contact-main.component';
import { CreateItemAreaComponent } from './create-item/create-item-area/create-item-area.component';
import { CreateItemMainComponent } from './create-item/create-item-main/create-item-main.component';
import { CreateMultipleAreaComponent } from './create-multiple/create-multiple-area/create-multiple-area.component';
import { CreateMultipleMainComponent } from './create-multiple/create-multiple-main/create-multiple-main.component';
import { CreateSingleAreaComponent } from './create-single/create-single-area/create-single-area.component';
import { CreateSingleMainComponent } from './create-single/create-single-main/create-single-main.component';
import { CreatorGridAreaComponent } from './creator-grid/creator-grid-area/creator-grid-area.component';
import { CreatorGridMainComponent } from './creator-grid/creator-grid-main/creator-grid-main.component';
import { CreatorListTwoAreaComponent } from './creator-list-two/creator-list-two-area/creator-list-two-area.component';
import { CreatorListTwoMainComponent } from './creator-list-two/creator-list-two-main/creator-list-two-main.component';
import { CreatorListAreaComponent } from './creator-list/creator-list-area/creator-list-area.component';
import { CreatorListMainComponent } from './creator-list/creator-list-main/creator-list-main.component';
import { CreatorMainComponent } from './creator/creator-main/creator-main.component';
import { CreatorPageAreaComponent } from './creator/creator-page-area/creator-page-area.component';
import { EditProfileAreaComponent } from './edit-profile/edit-profile-area/edit-profile-area.component';
import { EditProfileMainComponent } from './edit-profile/edit-profile-main/edit-profile-main.component';
import { ErrorPageMainComponent } from './error-page/error-page-main/error-page-main.component';
import { ForgetAreaComponent } from './forget/forget-area/forget-area.component';
import { ForgetMainComponent } from './forget/forget-main/forget-main.component';
import { CollectionsThreeComponent } from './home-three/collections-three/collections-three.component';
import { CreatorAreaThreeComponent } from './home-three/creator-area-three/creator-area-three.component';
import { CtaThreeComponent } from './home-three/cta-three/cta-three.component';
import { FooterThreeComponent } from './home-three/footer-three/footer-three.component';
import { HeaderThreeComponent } from './home-three/header-three/header-three.component';
import { HomeThreeMainComponent } from './home-three/home-three-main/home-three-main.component';
import { NftAreaThreeComponent } from './home-three/nft-area-three/nft-area-three.component';
import { ProcessAreaComponent } from './home-three/process-area/process-area.component';
import { SliderThreeComponent } from './home-three/slider-three/slider-three.component';
import { AuctionAreaTwoComponent } from './home-two/auction-area-two/auction-area-two.component';
import { BlogAreaTwoComponent } from './home-two/blog-area-two/blog-area-two.component';
import { BrandAreaTwoComponent } from './home-two/brand-area-two/brand-area-two.component';
import { CollectionAreaTwoComponent } from './home-two/collection-area-two/collection-area-two.component';
import { CtaTwoComponent } from './home-two/cta-two/cta-two.component';
import { HeaderTwoComponent } from './home-two/header-two/header-two.component';
import { HomeTwoHeroComponent } from './home-two/home-two-hero/home-two-hero.component';
import { HomeTwoMainComponent } from './home-two/home-two-main/home-two-main.component';
import { ProductsTwoComponent } from './home-two/products-two/products-two.component';
import { LiveAuctionAreaComponent } from './live-auction/live-auction-area/live-auction-area.component';
import { LiveAuctionMainComponent } from './live-auction/live-auction-main/live-auction-main.component';
import { LoginAreaComponent } from './login/login-area/login-area.component';
import { LoginMainComponent } from './login/login-main/login-main.component';
import { MaintananceMainComponent } from './maintanance/maintanance-main/maintanance-main.component';
import { PrivacyAreaComponent } from './privacy/privacy-area/privacy-area.component';
import { PrivacyMainComponent } from './privacy/privacy-main/privacy-main.component';
import { ProductCaruselAreaComponent } from './product-carusel/product-carusel-area/product-carusel-area.component';
import { ProductCaruselMainComponent } from './product-carusel/product-carusel-main/product-carusel-main.component';
import { ProductDetailsGridAreaComponent } from './product-details-grid/product-details-grid-area/product-details-grid-area.component';
import { ProductDetailsGridMainComponent } from './product-details-grid/product-details-grid-main/product-details-grid-main.component';
import { ProductDetailsTabAreaComponent } from './product-details-tab/product-details-tab-area/product-details-tab-area.component';
import { ProductDetailsTabMainComponent } from './product-details-tab/product-details-tab-main/product-details-tab-main.component';
import { ProductDetailAreaComponent } from './product-details/product-detail-area/product-detail-area.component';
import { ProductDetailsMainComponent } from './product-details/product-details-main/product-details-main.component';
import { ProductFiterMainComponent } from './product-filter/product-fiter-main/product-fiter-main.component';
import { ProductGridMainComponent } from './product-grid/product-grid-main/product-grid-main.component';
import { ProductListItemsComponent } from './product-list/product-list-items/product-list-items.component';
import { ProductListMainComponent } from './product-list/product-list-main/product-list-main.component';
import { ProductLiveCaruselAreaComponent } from './product-live-carusel/product-live-carusel-area/product-live-carusel-area.component';
import { ProductLiveCaruselMainComponent } from './product-live-carusel/product-live-carusel-main/product-live-carusel-main.component';
import { ProductLiveItemsComponent } from './product-live/product-live-items/product-live-items.component';
import { ProductLiveMainComponent } from './product-live/product-live-main/product-live-main.component';
import { ProductSimpleAreaComponent } from './product-simple/product-simple-area/product-simple-area.component';
import { ProductSimpleMainComponent } from './product-simple/product-simple-main/product-simple-main.component';
import { ProductTabMainComponent } from './product-tab/product-tab-main/product-tab-main.component';
import { ProfileAreaComponent } from './profile/profile-area/profile-area.component';
import { ProfileMainComponent } from './profile/profile-main/profile-main.component';
import { RankingAreaComponent } from './ranking/ranking-area/ranking-area.component';
import { RankingMainComponent } from './ranking/ranking-main/ranking-main.component';
import { RegisterAreaComponent } from './register/register-area/register-area.component';
import { RegisterMainComponent } from './register/register-main/register-main.component';
import { ShopGridAreaComponent } from './shop-grid/shop-grid-area/shop-grid-area.component';
import { ShopGridMainComponent } from './shop-grid/shop-grid-main/shop-grid-main.component';
import { CreattorShopComponent } from './shop/creattor-shop/creattor-shop.component';
import { ShopMainComponent } from './shop/shop-main/shop-main.component';
import { SupportFaqAreaComponent } from './support/support-faq-area/support-faq-area.component';
import { SupportFeatureAreaComponent } from './support/support-feature-area/support-feature-area.component';
import { SupportMainComponent } from './support/support-main/support-main.component';
import { TermsAreaComponent } from './terms/terms-area/terms-area.component';
import { TermsMainComponent } from './terms/terms-main/terms-main.component';
import { UpcomingAreaComponent } from './upcoming/upcoming-area/upcoming-area.component';
import { UpcomingMainComponent } from './upcoming/upcoming-main/upcoming-main.component';
import { WalletAreaComponent } from './wallet/wallet-area/wallet-area.component';
import { WalletMainComponent } from './wallet/wallet-main/wallet-main.component';

@NgModule({
  imports: [
    CommonModule,
    SwiperModule,
    MatSelectModule,
    MatSliderModule,
    RouterModule,
    NgxSliderModule,
    FormsModule,
    MetismenuAngularModule,
    ClipboardModule,
  ],
  declarations: [
    HomeMainComponent,
    HeaderComponent,
    HomeHeroSliderComponent,
    PopularSellersComponent,
    BidsAreaComponent,
    NftAreaComponent,
    CollectionAreaComponent,
    FeaturesAreaComponent,
    CtaAreaComponent,
    FooterComponent,
    HomeTwoMainComponent,
    HeaderTwoComponent,
    HomeTwoHeroComponent,
    CollectionAreaTwoComponent,
    ProductsTwoComponent,
    CtaTwoComponent,
    AuctionAreaTwoComponent,
    BrandAreaTwoComponent,
    BlogAreaTwoComponent,
    MarqueTextAreaComponent,
    HomeThreeMainComponent,
    HeaderThreeComponent,
    SliderThreeComponent,
    ProcessAreaComponent,
    NftAreaThreeComponent,
    CreatorAreaThreeComponent,
    CollectionsThreeComponent,
    CtaThreeComponent,
    FooterThreeComponent,
    BreadcrumbComponent,
    ShopMainComponent,
    CreattorShopComponent,
    CommonFooterComponent,
    ShopGridMainComponent,
    ShopGridAreaComponent,
    ProductDetailsMainComponent,
    ProductDetailsRightSideComponent,
    ProductDetailAreaComponent,
    ProductDetailsTabMainComponent,
    ProductDetailsTabAreaComponent,
    ProductDetailsGridMainComponent,
    ProductDetailsGridAreaComponent,
    ProductCaruselMainComponent,
    ProductCaruselAreaComponent,
    ProductFiterMainComponent,
    ProductGridMainComponent,
    ProductListMainComponent,
    ProductListItemsComponent,
    ProductLiveMainComponent,
    ProductLiveItemsComponent,
    ProductLiveCaruselMainComponent,
    ProductLiveCaruselAreaComponent,
    ProductSimpleMainComponent,
    ProductSimpleAreaComponent,
    ProductTabMainComponent,
    AboutMainComponent,
    AboutAreaComponent,
    AboutMarqueeComponent,
    AboutMissionAreaComponent,
    AboutVideoAreaComponent,
    AboutTeamMembersComponent,
    AboutBrandAreaComponent,
    AboutJoinAreaComponent,
    AboutFooterComponent,
    ContactMainComponent,
    ContactAreaComponent,
    ActivityMainComponent,
    ActivityAreaComponent,
    LoginMainComponent,
    LoginAreaComponent,
    FooterTwoComponent,
    RegisterMainComponent,
    RegisterAreaComponent,
    EditProfileMainComponent,
    EditProfileAreaComponent,
    BlogMainComponent,
    BlogAreaComponent,
    BlogRightSideComponent,
    BlogDetailsMainComponent,
    BlogDetailsAreaComponent,
    RankingMainComponent,
    RankingAreaComponent,
    PaginationComponent,
    UpcomingMainComponent,
    UpcomingAreaComponent,
    ForgetMainComponent,
    ForgetAreaComponent,
    LiveAuctionMainComponent,
    LiveAuctionAreaComponent,
    CollectionMainComponent,
    CollectionGridMainComponent,
    CollectionGridAreaComponent,
    CollectionGridTwoMainComponent,
    CollectionGridTwoAreComponent,
    WalletMainComponent,
    WalletAreaComponent,
    CreatorMainComponent,
    CreatorPageAreaComponent,
    CollectionPageAreaComponent,
    CreatorGridMainComponent,
    CreatorGridAreaComponent,
    CreatorListMainComponent,
    CreatorListAreaComponent,
    CreatorListTwoMainComponent,
    CreatorListTwoAreaComponent,
    CreateItemMainComponent,
    CreateItemAreaComponent,
    CreateSingleMainComponent,
    CreateSingleAreaComponent,
    CreateMultipleMainComponent,
    CreateMultipleAreaComponent,
    ComingSoonMainComponent,
    SupportMainComponent,
    SupportFeatureAreaComponent,
    SupportFaqAreaComponent,
    TermsMainComponent,
    TermsAreaComponent,
    PrivacyMainComponent,
    PrivacyAreaComponent,
    MaintananceMainComponent,
    ErrorPageMainComponent,
    ProfileMainComponent,
    ProfileAreaComponent,
  ],
  exports: [NgxSliderModule],
})
export class BitakonModule {}
