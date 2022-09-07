'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nx-nest-angular-starter documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-158af6c2187a8605d5ce58a4e5ed4b46b329d1e8edae16f42758186798233784d450b31c6aed9f9b9e6801ef50705034043d4f367651626cc7f4df89fe7c7f6b"' : 'data-target="#xs-controllers-links-module-AppModule-158af6c2187a8605d5ce58a4e5ed4b46b329d1e8edae16f42758186798233784d450b31c6aed9f9b9e6801ef50705034043d4f367651626cc7f4df89fe7c7f6b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-158af6c2187a8605d5ce58a4e5ed4b46b329d1e8edae16f42758186798233784d450b31c6aed9f9b9e6801ef50705034043d4f367651626cc7f4df89fe7c7f6b"' :
                                            'id="xs-controllers-links-module-AppModule-158af6c2187a8605d5ce58a4e5ed4b46b329d1e8edae16f42758186798233784d450b31c6aed9f9b9e6801ef50705034043d4f367651626cc7f4df89fe7c7f6b"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-158af6c2187a8605d5ce58a4e5ed4b46b329d1e8edae16f42758186798233784d450b31c6aed9f9b9e6801ef50705034043d4f367651626cc7f4df89fe7c7f6b"' : 'data-target="#xs-injectables-links-module-AppModule-158af6c2187a8605d5ce58a4e5ed4b46b329d1e8edae16f42758186798233784d450b31c6aed9f9b9e6801ef50705034043d4f367651626cc7f4df89fe7c7f6b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-158af6c2187a8605d5ce58a4e5ed4b46b329d1e8edae16f42758186798233784d450b31c6aed9f9b9e6801ef50705034043d4f367651626cc7f4df89fe7c7f6b"' :
                                        'id="xs-injectables-links-module-AppModule-158af6c2187a8605d5ce58a4e5ed4b46b329d1e8edae16f42758186798233784d450b31c6aed9f9b9e6801ef50705034043d4f367651626cc7f4df89fe7c7f6b"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ArticleModule.html" data-type="entity-link" >ArticleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ArticleModule-d5676970ce1d803d4f570626c6d1bc4a2368d03af6801b04eebc8f23e1afafa661cfca5d6d905397fe29a721fa19eb5f560a46c5be9048b038e3cb8640452d3a"' : 'data-target="#xs-controllers-links-module-ArticleModule-d5676970ce1d803d4f570626c6d1bc4a2368d03af6801b04eebc8f23e1afafa661cfca5d6d905397fe29a721fa19eb5f560a46c5be9048b038e3cb8640452d3a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ArticleModule-d5676970ce1d803d4f570626c6d1bc4a2368d03af6801b04eebc8f23e1afafa661cfca5d6d905397fe29a721fa19eb5f560a46c5be9048b038e3cb8640452d3a"' :
                                            'id="xs-controllers-links-module-ArticleModule-d5676970ce1d803d4f570626c6d1bc4a2368d03af6801b04eebc8f23e1afafa661cfca5d6d905397fe29a721fa19eb5f560a46c5be9048b038e3cb8640452d3a"' }>
                                            <li class="link">
                                                <a href="controllers/ArticleController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArticleController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ArticleModule-d5676970ce1d803d4f570626c6d1bc4a2368d03af6801b04eebc8f23e1afafa661cfca5d6d905397fe29a721fa19eb5f560a46c5be9048b038e3cb8640452d3a"' : 'data-target="#xs-injectables-links-module-ArticleModule-d5676970ce1d803d4f570626c6d1bc4a2368d03af6801b04eebc8f23e1afafa661cfca5d6d905397fe29a721fa19eb5f560a46c5be9048b038e3cb8640452d3a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ArticleModule-d5676970ce1d803d4f570626c6d1bc4a2368d03af6801b04eebc8f23e1afafa661cfca5d6d905397fe29a721fa19eb5f560a46c5be9048b038e3cb8640452d3a"' :
                                        'id="xs-injectables-links-module-ArticleModule-d5676970ce1d803d4f570626c6d1bc4a2368d03af6801b04eebc8f23e1afafa661cfca5d6d905397fe29a721fa19eb5f560a46c5be9048b038e3cb8640452d3a"' }>
                                        <li class="link">
                                            <a href="injectables/ArticleService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArticleService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CaslFactory.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaslFactory</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TagService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-0d2256de9dac18d6329df9446668d225add0257f764fb5686db5b26632c1965f98e13861ab8c735bea21620fdbbdde17dcecc97cffc820e03afadfa67c9b6840"' : 'data-target="#xs-injectables-links-module-AuthModule-0d2256de9dac18d6329df9446668d225add0257f764fb5686db5b26632c1965f98e13861ab8c735bea21620fdbbdde17dcecc97cffc820e03afadfa67c9b6840"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-0d2256de9dac18d6329df9446668d225add0257f764fb5686db5b26632c1965f98e13861ab8c735bea21620fdbbdde17dcecc97cffc820e03afadfa67c9b6840"' :
                                        'id="xs-injectables-links-module-AuthModule-0d2256de9dac18d6329df9446668d225add0257f764fb5686db5b26632c1965f98e13861ab8c735bea21620fdbbdde17dcecc97cffc820e03afadfa67c9b6840"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CaslModule.html" data-type="entity-link" >CaslModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CaslModule-394dfe91f625f773ab2c6f36a548635880e611126b01c79ad76a979407ccb62c5bae1a153fe429a91d49d96ae74884f78651d51e3aff58e7358277c45a885d78"' : 'data-target="#xs-injectables-links-module-CaslModule-394dfe91f625f773ab2c6f36a548635880e611126b01c79ad76a979407ccb62c5bae1a153fe429a91d49d96ae74884f78651d51e3aff58e7358277c45a885d78"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CaslModule-394dfe91f625f773ab2c6f36a548635880e611126b01c79ad76a979407ccb62c5bae1a153fe429a91d49d96ae74884f78651d51e3aff58e7358277c45a885d78"' :
                                        'id="xs-injectables-links-module-CaslModule-394dfe91f625f773ab2c6f36a548635880e611126b01c79ad76a979407ccb62c5bae1a153fe429a91d49d96ae74884f78651d51e3aff58e7358277c45a885d78"' }>
                                        <li class="link">
                                            <a href="injectables/CaslFactory.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaslFactory</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileModule.html" data-type="entity-link" >ProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProfileModule-6e9b19b3c33382bcbab049fad95e8119f713f304e80c1af69d8e84224ec91b94ed9daf5ec992d3284a981bb28c1fdcc666390e6e1826db7552441849df395778"' : 'data-target="#xs-controllers-links-module-ProfileModule-6e9b19b3c33382bcbab049fad95e8119f713f304e80c1af69d8e84224ec91b94ed9daf5ec992d3284a981bb28c1fdcc666390e6e1826db7552441849df395778"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProfileModule-6e9b19b3c33382bcbab049fad95e8119f713f304e80c1af69d8e84224ec91b94ed9daf5ec992d3284a981bb28c1fdcc666390e6e1826db7552441849df395778"' :
                                            'id="xs-controllers-links-module-ProfileModule-6e9b19b3c33382bcbab049fad95e8119f713f304e80c1af69d8e84224ec91b94ed9daf5ec992d3284a981bb28c1fdcc666390e6e1826db7552441849df395778"' }>
                                            <li class="link">
                                                <a href="controllers/ProfileController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProfileModule-6e9b19b3c33382bcbab049fad95e8119f713f304e80c1af69d8e84224ec91b94ed9daf5ec992d3284a981bb28c1fdcc666390e6e1826db7552441849df395778"' : 'data-target="#xs-injectables-links-module-ProfileModule-6e9b19b3c33382bcbab049fad95e8119f713f304e80c1af69d8e84224ec91b94ed9daf5ec992d3284a981bb28c1fdcc666390e6e1826db7552441849df395778"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProfileModule-6e9b19b3c33382bcbab049fad95e8119f713f304e80c1af69d8e84224ec91b94ed9daf5ec992d3284a981bb28c1fdcc666390e6e1826db7552441849df395778"' :
                                        'id="xs-injectables-links-module-ProfileModule-6e9b19b3c33382bcbab049fad95e8119f713f304e80c1af69d8e84224ec91b94ed9daf5ec992d3284a981bb28c1fdcc666390e6e1826db7552441849df395778"' }>
                                        <li class="link">
                                            <a href="injectables/CaslFactory.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaslFactory</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProfileService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TagModule.html" data-type="entity-link" >TagModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TagModule-3b1f3666aabe81efe15fb186bd16ca67b1c20e550d2f7c82a9626c509289c0f42eec8461a33518055173fef2cdbe396a0be746aa692f25314ac46f5f3a4cba0a"' : 'data-target="#xs-controllers-links-module-TagModule-3b1f3666aabe81efe15fb186bd16ca67b1c20e550d2f7c82a9626c509289c0f42eec8461a33518055173fef2cdbe396a0be746aa692f25314ac46f5f3a4cba0a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TagModule-3b1f3666aabe81efe15fb186bd16ca67b1c20e550d2f7c82a9626c509289c0f42eec8461a33518055173fef2cdbe396a0be746aa692f25314ac46f5f3a4cba0a"' :
                                            'id="xs-controllers-links-module-TagModule-3b1f3666aabe81efe15fb186bd16ca67b1c20e550d2f7c82a9626c509289c0f42eec8461a33518055173fef2cdbe396a0be746aa692f25314ac46f5f3a4cba0a"' }>
                                            <li class="link">
                                                <a href="controllers/TagController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TagModule-3b1f3666aabe81efe15fb186bd16ca67b1c20e550d2f7c82a9626c509289c0f42eec8461a33518055173fef2cdbe396a0be746aa692f25314ac46f5f3a4cba0a"' : 'data-target="#xs-injectables-links-module-TagModule-3b1f3666aabe81efe15fb186bd16ca67b1c20e550d2f7c82a9626c509289c0f42eec8461a33518055173fef2cdbe396a0be746aa692f25314ac46f5f3a4cba0a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TagModule-3b1f3666aabe81efe15fb186bd16ca67b1c20e550d2f7c82a9626c509289c0f42eec8461a33518055173fef2cdbe396a0be746aa692f25314ac46f5f3a4cba0a"' :
                                        'id="xs-injectables-links-module-TagModule-3b1f3666aabe81efe15fb186bd16ca67b1c20e550d2f7c82a9626c509289c0f42eec8461a33518055173fef2cdbe396a0be746aa692f25314ac46f5f3a4cba0a"' }>
                                        <li class="link">
                                            <a href="injectables/TagService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-500c925678d0d3960b3f52bedbf16cd58cf3573ee8b62e8d02da976a2c9695e295b7d1e5050fe3cc22285bfcb463ce943207b4eb931d560ef9e63072312f8996"' : 'data-target="#xs-controllers-links-module-UsersModule-500c925678d0d3960b3f52bedbf16cd58cf3573ee8b62e8d02da976a2c9695e295b7d1e5050fe3cc22285bfcb463ce943207b4eb931d560ef9e63072312f8996"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-500c925678d0d3960b3f52bedbf16cd58cf3573ee8b62e8d02da976a2c9695e295b7d1e5050fe3cc22285bfcb463ce943207b4eb931d560ef9e63072312f8996"' :
                                            'id="xs-controllers-links-module-UsersModule-500c925678d0d3960b3f52bedbf16cd58cf3573ee8b62e8d02da976a2c9695e295b7d1e5050fe3cc22285bfcb463ce943207b4eb931d560ef9e63072312f8996"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-500c925678d0d3960b3f52bedbf16cd58cf3573ee8b62e8d02da976a2c9695e295b7d1e5050fe3cc22285bfcb463ce943207b4eb931d560ef9e63072312f8996"' : 'data-target="#xs-injectables-links-module-UsersModule-500c925678d0d3960b3f52bedbf16cd58cf3573ee8b62e8d02da976a2c9695e295b7d1e5050fe3cc22285bfcb463ce943207b4eb931d560ef9e63072312f8996"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-500c925678d0d3960b3f52bedbf16cd58cf3573ee8b62e8d02da976a2c9695e295b7d1e5050fe3cc22285bfcb463ce943207b4eb931d560ef9e63072312f8996"' :
                                        'id="xs-injectables-links-module-UsersModule-500c925678d0d3960b3f52bedbf16cd58cf3573ee8b62e8d02da976a2c9695e295b7d1e5050fe3cc22285bfcb463ce943207b4eb931d560ef9e63072312f8996"' }>
                                        <li class="link">
                                            <a href="injectables/CaslFactory.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaslFactory</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/ArticleEntity.html" data-type="entity-link" >ArticleEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/FollowEntity.html" data-type="entity-link" >FollowEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/TagEntity.html" data-type="entity-link" >TagEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/UserEntity.html" data-type="entity-link" >UserEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/UserRoles.html" data-type="entity-link" >UserRoles</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ArticleDto.html" data-type="entity-link" >ArticleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArticlesQueryParams.html" data-type="entity-link" >ArticlesQueryParams</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateArticleDto.html" data-type="entity-link" >CreateArticleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTagDto.html" data-type="entity-link" >CreateTagDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteArticlePolicyHandler.html" data-type="entity-link" >DeleteArticlePolicyHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteUserPolicyHandler.html" data-type="entity-link" >DeleteUserPolicyHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PasswordTransformer.html" data-type="entity-link" >PasswordTransformer</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchArticlePolicyHandler.html" data-type="entity-link" >PatchArticlePolicyHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserPolicyHandler.html" data-type="entity-link" >PatchUserPolicyHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterDto.html" data-type="entity-link" >RegisterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDto.html" data-type="entity-link" >UserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/PoliciesGuard.html" data-type="entity-link" >PoliciesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IPolicyHandler.html" data-type="entity-link" >IPolicyHandler</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});