import { TermsOfService } from "@/types/terms";
import { LocalizedText } from "@/types/i18n";

const koOnly = (text: string): LocalizedText => ({
    ko: text,
    en: text,
    "pt-BR": text,
});

export const termsOfService: TermsOfService[] = [
    {
        slug: "tank-pop-block-puzzle",
        appName: {
            ko: "Tank Pop Block Puzzle",
            en: "Tank Pop Block Puzzle",
            "pt-BR": "Tank Pop Block Puzzle",
        },
        projectId: "tank-pop-block-puzzle",
        privacySlug: "tank-pop-block-puzzle",
        summary: {
            ko: "Tank Pop Block Puzzle 모바일 게임 서비스 이용약관입니다.",
            en: "These Terms of Service apply to the Tank Pop Block Puzzle mobile game service.",
            "pt-BR": "Estes Termos de Serviço se aplicam ao serviço do jogo mobile Tank Pop Block Puzzle.",
        },
        introduction: {
            ko: "본 약관은 디스크팩토리(DiskFactory, 이하 \"회사\")가 제공하는 Tank Pop Block Puzzle 모바일 게임 애플리케이션과 이에 부수되는 웹사이트, 고객지원, 알림 및 기타 관련 서비스(통칭하여 \"서비스\")의 이용 조건을 정합니다. 서비스를 설치하거나 이용하면 본 약관에 동의한 것으로 봅니다.",
            en: "These Terms govern your use of the Tank Pop Block Puzzle mobile game application and related websites, customer support, notices, and other services provided by DiskFactory (collectively, the \"Service\"). By installing or using the Service, you agree to these Terms.",
            "pt-BR": "Estes Termos regulam o uso do aplicativo mobile Tank Pop Block Puzzle e de sites relacionados, atendimento ao cliente, avisos e outros serviços correlatos fornecidos pela DiskFactory (em conjunto, o \"Serviço\"). Ao instalar ou usar o Serviço, você concorda com estes Termos.",
        },
        effectiveDate: "2026-07-23",
        contactEmail: "contact@diskfactory.app",
        sections: [
            {
                kind: "purpose",
                title: {
                    ko: "목적 및 적용 범위",
                    en: "Purpose and Scope",
                    "pt-BR": "Finalidade e escopo",
                },
                paragraphs: [
                    {
                        ko: "본 약관은 회사와 서비스를 이용하는 개인 이용자 사이의 권리, 의무, 책임사항 및 서비스 이용에 필요한 기본 사항을 규정합니다.",
                        en: "These Terms set out the rights, obligations, responsibilities, and basic conditions that apply between the Company and individual users of the Service.",
                        "pt-BR": "Estes Termos estabelecem os direitos, obrigações, responsabilidades e condições básicas aplicáveis entre a Empresa e os usuários individuais do Serviço.",
                    },
                    {
                        ko: "서비스에는 게임 앱, 게임 내 콘텐츠, 광고, 알림, 이벤트, 고객지원, 회사가 운영하는 웹페이지 및 향후 회사가 서비스와 관련하여 제공하는 기능이 포함됩니다.",
                        en: "The Service includes the game app, in-game content, advertisements, notifications, events, customer support, Company-operated webpages, and any future features related to the Service.",
                        "pt-BR": "O Serviço inclui o app do jogo, conteúdos dentro do jogo, anúncios, notificações, eventos, atendimento ao cliente, páginas web operadas pela Empresa e quaisquer funcionalidades futuras relacionadas ao Serviço.",
                    },
                ],
            },
            {
                kind: "definitions",
                title: {
                    ko: "용어의 정의",
                    en: "Definitions",
                    "pt-BR": "Definições",
                },
                paragraphs: [
                    {
                        ko: "본 약관에서 사용하는 주요 용어의 의미는 다음과 같습니다. 본 조에서 정하지 않은 용어는 관련 법령, 플랫폼 정책 및 일반적인 거래 관행에 따릅니다.",
                        en: "The main terms used in these Terms have the meanings below. Terms not defined here are interpreted according to applicable law, platform policies, and ordinary commercial practice.",
                        "pt-BR": "Os principais termos usados nestes Termos têm os significados abaixo. Termos não definidos aqui serão interpretados conforme a legislação aplicável, as políticas das plataformas e as práticas comerciais usuais.",
                    },
                ],
                bullets: [
                    {
                        ko: "\"이용자\"란 본 약관에 동의하고 서비스를 설치하거나 이용하는 개인을 말합니다.",
                        en: "\"User\" means an individual who agrees to these Terms and installs or uses the Service.",
                        "pt-BR": "\"Usuário\" significa a pessoa física que concorda com estes Termos e instala ou usa o Serviço.",
                    },
                    {
                        ko: "\"콘텐츠\"란 게임, 그래픽, 음악, 텍스트, 아이템, 재화, 데이터, 광고 및 회사가 서비스에서 제공하는 디지털 자료 일체를 말합니다.",
                        en: "\"Content\" means the game, graphics, music, text, items, currency, data, advertisements, and all other digital materials provided through the Service.",
                        "pt-BR": "\"Conteúdo\" significa o jogo, gráficos, músicas, textos, itens, moedas, dados, anúncios e todos os demais materiais digitais fornecidos por meio do Serviço.",
                    },
                    {
                        ko: "\"플랫폼\"이란 Google Play, Apple App Store, 기타 앱 마켓 또는 로그인을 포함하여 서비스 이용에 필요한 제3자 환경을 말합니다.",
                        en: "\"Platform\" means third-party environments required to use the Service, including Google Play, Apple App Store, other app stores, and sign-in services.",
                        "pt-BR": "\"Plataforma\" significa ambientes de terceiros necessários para usar o Serviço, incluindo Google Play, Apple App Store, outras lojas de aplicativos e serviços de login.",
                    },
                    {
                        ko: "\"광고성 푸시\"란 이벤트, 업데이트, 혜택, 프로모션 등 영리목적의 광고성 정보를 앱 푸시 알림으로 전송하는 것을 말합니다.",
                        en: "\"Marketing Push\" means app push notifications that deliver commercial advertising information, such as events, updates, benefits, or promotions.",
                        "pt-BR": "\"Push de marketing\" significa notificações push do app que enviam informações comerciais ou promocionais, como eventos, atualizações, benefícios ou promoções.",
                    },
                ],
            },
            {
                kind: "eligibility",
                title: {
                    ko: "이용 자격 및 미성년자",
                    en: "Eligibility and Minors",
                    "pt-BR": "Elegibilidade e menores de idade",
                },
                paragraphs: [
                    {
                        ko: "이용자는 거주 국가의 법령에 따라 본 약관에 동의하고 서비스를 이용할 수 있는 능력이 있어야 합니다. 미성년자 또는 행위능력이 제한된 이용자는 법정대리인의 동의를 받아 서비스를 이용해야 합니다.",
                        en: "You must have the legal capacity to agree to these Terms and use the Service under the laws of your country of residence. Minors or users with limited legal capacity must use the Service with consent from a parent or legal guardian.",
                        "pt-BR": "Você deve ter capacidade legal para concordar com estes Termos e usar o Serviço conforme as leis do seu país de residência. Menores de idade ou usuários com capacidade legal limitada devem usar o Serviço com o consentimento de um dos pais ou responsável legal.",
                    },
                    {
                        ko: "서비스는 만 13세 미만 아동을 대상으로 하지 않으며, 회사는 만 13세 미만 아동에게 광고성 정보를 의도적으로 전송하지 않습니다. 특정 국가 또는 플랫폼의 연령 기준이 더 엄격한 경우 해당 기준이 우선 적용될 수 있습니다.",
                        en: "The Service is not directed to children under 13, and the Company does not knowingly send marketing information to children under 13. If stricter age requirements apply in a particular country or platform, those requirements may prevail.",
                        "pt-BR": "O Serviço não é direcionado a crianças menores de 13 anos, e a Empresa não envia intencionalmente informações de marketing a crianças menores de 13 anos. Se determinado país ou plataforma aplicar critérios de idade mais rigorosos, esses critérios poderão prevalecer.",
                    },
                ],
            },
            {
                kind: "license",
                title: {
                    ko: "서비스 이용 허락",
                    en: "License to Use the Service",
                    "pt-BR": "Licença de uso do Serviço",
                },
                paragraphs: [
                    {
                        ko: "회사는 이용자가 본 약관과 관련 법령을 준수하는 것을 조건으로, 개인적이고 비상업적인 오락 목적에 한하여 서비스를 이용할 수 있는 제한적, 비독점적, 양도 불가능하고 철회 가능한 이용권을 부여합니다.",
                        en: "Subject to your compliance with these Terms and applicable law, the Company grants you a limited, non-exclusive, non-transferable, revocable license to use the Service for personal, non-commercial entertainment purposes.",
                        "pt-BR": "Desde que você cumpra estes Termos e a legislação aplicável, a Empresa concede a você uma licença limitada, não exclusiva, intransferível e revogável para usar o Serviço para fins pessoais, não comerciais e de entretenimento.",
                    },
                    {
                        ko: "서비스와 콘텐츠는 판매되는 것이 아니라 이용 허락되는 것입니다. 이용자는 회사의 사전 서면 동의 없이 서비스를 복제, 배포, 판매, 대여, 담보 제공, 상업적 이용 또는 제3자에게 이전할 수 없습니다.",
                        en: "The Service and Content are licensed, not sold. You may not copy, distribute, sell, rent, pledge, commercially exploit, or transfer the Service without the Company's prior written consent.",
                        "pt-BR": "O Serviço e o Conteúdo são licenciados, não vendidos. Você não pode copiar, distribuir, vender, alugar, oferecer como garantia, explorar comercialmente ou transferir o Serviço sem o consentimento prévio e por escrito da Empresa.",
                    },
                ],
            },
            {
                kind: "accounts",
                title: {
                    ko: "계정, 게스트 이용 및 데이터",
                    en: "Accounts, Guest Use, and Data",
                    "pt-BR": "Contas, uso como visitante e dados",
                },
                paragraphs: [
                    {
                        ko: "서비스는 게스트 상태 또는 플랫폼 계정 연동 방식으로 제공될 수 있습니다. 게스트 상태로 이용하는 경우 앱 삭제, 기기 변경, 운영체제 초기화, 캐시 또는 데이터 삭제 등에 따라 게임 진행 정보가 복구되지 않을 수 있습니다.",
                        en: "The Service may be provided through guest access or platform account linking. If you use guest access, your game progress may not be recoverable after deleting the app, changing devices, resetting the operating system, or clearing cache or data.",
                        "pt-BR": "O Serviço pode ser oferecido por acesso como visitante ou por vinculação a uma conta de plataforma. Se você usar o acesso como visitante, o progresso do jogo poderá não ser recuperável após excluir o app, trocar de dispositivo, restaurar o sistema operacional ou limpar cache ou dados.",
                    },
                    {
                        ko: "이용자는 본인의 기기, 계정, 로그인 수단을 안전하게 관리해야 하며, 본인의 관리 소홀로 발생한 손해에 대해 회사는 관련 법령상 책임이 있는 경우를 제외하고 책임을 지지 않습니다.",
                        en: "You are responsible for safely managing your device, account, and sign-in methods. The Company is not responsible for loss caused by your failure to manage them, except where the Company is liable under applicable law.",
                        "pt-BR": "Você é responsável por manter seu dispositivo, conta e meios de login em segurança. A Empresa não se responsabiliza por perdas causadas por falha sua nessa gestão, exceto quando a Empresa for responsável nos termos da legislação aplicável.",
                    },
                ],
            },
            {
                kind: "service",
                title: {
                    ko: "서비스 제공, 변경 및 종료",
                    en: "Service Provision, Changes, and End of Service",
                    "pt-BR": "Disponibilização, alterações e encerramento do Serviço",
                },
                paragraphs: [
                    {
                        ko: "회사는 운영상 또는 기술상 필요에 따라 업데이트, 점검, 오류 수정, 밸런스 조정, 콘텐츠 추가 또는 삭제 등 서비스의 전부 또는 일부를 변경할 수 있습니다.",
                        en: "The Company may change all or part of the Service for operational or technical reasons, including updates, maintenance, bug fixes, balance adjustments, and adding or removing content.",
                        "pt-BR": "A Empresa pode alterar todo ou parte do Serviço por razões operacionais ou técnicas, incluindo atualizações, manutenção, correção de erros, ajustes de balanceamento e adição ou remoção de conteúdo.",
                    },
                    {
                        ko: "회사는 설비 점검, 통신 장애, 보안 사고, 플랫폼 정책 변경, 천재지변, 법령 준수 또는 기타 불가피한 사유가 있는 경우 서비스 제공을 일시 중단할 수 있습니다. 가능한 경우 회사는 사전 또는 사후에 공지합니다.",
                        en: "The Company may temporarily suspend the Service due to maintenance, network failures, security incidents, platform policy changes, force majeure, legal compliance, or other unavoidable reasons. Where practical, the Company will provide notice before or after the suspension.",
                        "pt-BR": "A Empresa pode suspender temporariamente o Serviço por manutenção, falhas de rede, incidentes de segurança, mudanças nas políticas das plataformas, força maior, cumprimento de obrigações legais ou outros motivos inevitáveis. Quando viável, a Empresa avisará antes ou depois da suspensão.",
                    },
                    {
                        ko: "회사는 사업상 또는 기술상 중대한 사유로 서비스를 종료할 수 있습니다. 이 경우 회사는 합리적인 기간 전에 서비스 내 공지, 웹페이지 게시 또는 기타 적절한 방법으로 안내합니다.",
                        en: "The Company may end the Service for significant business or technical reasons. In that case, the Company will provide notice within a reasonable period through in-service notices, webpages, or other appropriate methods.",
                        "pt-BR": "A Empresa pode encerrar o Serviço por motivos comerciais ou técnicos relevantes. Nesse caso, a Empresa comunicará o encerramento com antecedência razoável por avisos no Serviço, publicação em páginas web ou outros meios adequados.",
                    },
                ],
            },
            {
                kind: "payments",
                title: {
                    ko: "유료 콘텐츠 및 환불",
                    en: "Paid Content and Refunds",
                    "pt-BR": "Conteúdo pago e reembolsos",
                },
                paragraphs: [
                    {
                        ko: "기본 서비스는 무료로 제공되며, 회사는 광고제거권 등 일부 유료상품을 제공할 수 있습니다. 유료상품의 상품명, 최종 결제가격, 제공 내용 및 이용 조건은 구매 화면에 표시합니다.",
                        en: "The basic Service is provided free of charge, and the Company may offer paid products such as a no-ads entitlement. The product name, final purchase price, benefits, and conditions will be displayed on the purchase screen.",
                        "pt-BR": "O Serviço básico é oferecido gratuitamente, e a Empresa pode disponibilizar produtos pagos, como o direito de remover anúncios. O nome do produto, o preço final, os benefícios e as condições serão exibidos na tela de compra.",
                    },
                    {
                        ko: "광고제거권은 한 번 구매하면 서비스 제공기간 동안 구매에 사용된 이용자 또는 플랫폼 계정에서 사용할 수 있는 비소모성·일회성 상품이며, 정기적으로 결제되는 구독상품이 아닙니다.",
                        en: "The no-ads entitlement is a non-consumable, one-time product available to the user or platform account used for the purchase while the Service is provided. It is not a recurring subscription.",
                        "pt-BR": "O direito de remover anúncios é um produto não consumível e de compra única, disponível para o usuário ou a conta da plataforma usada na compra enquanto o Serviço for oferecido. Não é uma assinatura recorrente.",
                    },
                    {
                        ko: "광고제거권이 정상적으로 적용되면 해당 버전의 서비스에서 배너광고, 전면광고 및 보상형 광고 영상의 노출이 제거됩니다. 보상형 광고와 연결되었던 게임 내 보상은 기존 지급 조건을 충족한 경우 광고 영상 시청 없이 동일하게 지급됩니다.",
                        en: "When the no-ads entitlement is active, banner ads, interstitial ads, and rewarded-ad videos are removed from the applicable version of the Service. In-game rewards previously associated with rewarded ads will be granted without viewing an ad when the existing reward conditions are met.",
                        "pt-BR": "Quando o direito de remover anúncios estiver ativo, banners, anúncios intersticiais e vídeos de anúncios recompensados serão removidos da versão aplicável do Serviço. As recompensas do jogo antes vinculadas a anúncios recompensados serão concedidas sem assistir ao vídeo quando as condições de recompensa existentes forem atendidas.",
                    },
                    {
                        ko: "본 약관에서 '영구'란 별도의 정기결제 없이 광고제거권이 적용된 계정에서 서비스 제공기간 동안 혜택이 유지된다는 의미입니다. 서비스 종료 이후까지 서비스 제공을 보장하거나 광고제거권의 소유권 또는 양도권을 부여한다는 의미는 아닙니다.",
                        en: "In these Terms, \"lifetime\" means that the benefit remains on the applicable account without recurring charges while the Service is provided. It does not guarantee operation after the Service ends or grant ownership or transfer rights in the entitlement.",
                        "pt-BR": "Nestes Termos, \"vitalício\" significa que o benefício permanece na conta aplicável, sem cobranças recorrentes, enquanto o Serviço for oferecido. Isso não garante a operação após o encerramento do Serviço nem concede propriedade ou direito de transferência sobre o benefício.",
                    },
                    {
                        ko: "Google Play 버전의 광고제거권은 Google Play Billing을 통해 결제되고 RevenueCat을 통해 구매 확인과 복구가 이루어집니다. Google Play Games에 로그인한 경우 해당 이용자 식별값을 사용해 RevenueCat 권리를 연결하며, 로그인하지 않은 경우에는 RevenueCat의 익명 앱 이용자 식별값이 사용될 수 있습니다. 이 버전의 광고제거권 처리에는 Apps in Toss와 Apps in Toss 전용 구매 서버가 사용되지 않습니다.",
                        en: "In the Google Play version, the no-ads entitlement is purchased through Google Play Billing and verified or restored through RevenueCat. When you are signed in to Google Play Games, that user identifier is used to link the RevenueCat entitlement; otherwise, a RevenueCat anonymous app-user identifier may be used. Apps in Toss and its dedicated purchase server are not used for this version's no-ads purchase.",
                        "pt-BR": "Na versão do Google Play, o direito de remover anúncios é comprado pelo Google Play Billing e verificado ou restaurado pela RevenueCat. Quando você está conectado ao Google Play Games, esse identificador é usado para vincular o direito na RevenueCat; caso contrário, pode ser usado um identificador anônimo de usuário do aplicativo da RevenueCat. O Apps in Toss e seu servidor de compras exclusivo não são usados nessa versão.",
                    },
                    {
                        ko: "Apps in Toss 버전의 광고제거권은 Apps in Toss 로그인/IAP를 통해 인증·결제되고, 토스 계정과 디스크팩토리가 Cloudflare Worker/D1으로 운영하는 전용 구매 서버를 통해 구매 확인 및 복구가 이루어집니다. 이 버전의 광고제거권 처리에는 RevenueCat이 사용되지 않습니다.",
                        en: "In the Apps in Toss version, authentication and payment use Apps in Toss login/IAP, and the purchase is verified or restored using the Toss account and DiskFactory's dedicated purchase server operated with Cloudflare Worker/D1. RevenueCat is not used for this version's no-ads purchase.",
                        "pt-BR": "Na versão do Apps in Toss, a autenticação e o pagamento usam o login/IAP do Apps in Toss, e a compra é verificada ou restaurada por meio da conta Toss e do servidor de compras exclusivo da DiskFactory operado com Cloudflare Worker/D1. A RevenueCat não é usada nessa versão.",
                    },
                    {
                        ko: "Google Play 버전과 Apps in Toss 버전의 광고제거권은 서로 다른 결제 경로와 이용자 식별체계를 사용하므로 다른 버전으로 자동 이전되거나 복구되지 않습니다. 이용자는 광고제거권을 구매한 버전과 해당 계정에서 구매 복구를 진행해야 합니다.",
                        en: "The Google Play and Apps in Toss versions use different purchase paths and user-identification systems, so a no-ads entitlement is not automatically transferred or restored across versions. You must restore the purchase in the version and account through which it was purchased.",
                        "pt-BR": "As versões do Google Play e do Apps in Toss usam fluxos de compra e sistemas de identificação diferentes; por isso, o direito de remover anúncios não é transferido nem restaurado automaticamente entre versões. A restauração deve ser feita na versão e na conta em que a compra foi realizada.",
                    },
                    {
                        ko: "이용자는 계약내용에 관한 서면을 받은 날 또는 상품을 이용할 수 있게 된 날 중 늦은 날부터 7일 이내에 유료상품의 청약철회를 요청할 수 있습니다. 다만 광고제거권과 같이 구매 즉시 제공되는 디지털콘텐츠는 구매 전에 청약철회 제한 가능성을 안내하고 이용자가 즉시 제공에 동의한 경우 관계 법령이 허용하는 범위에서 청약철회가 제한될 수 있습니다.",
                        en: "You may request withdrawal from a paid-product purchase within seven days from the later of the date you receive the purchase terms in writing or the date the product becomes available. For digital content supplied immediately, such as the no-ads entitlement, withdrawal may be restricted to the extent permitted by law if the restriction was disclosed before purchase and you agreed to immediate supply.",
                        "pt-BR": "Você pode solicitar o arrependimento da compra de um produto pago no prazo de sete dias contado da data mais recente entre o recebimento por escrito das condições da compra e a disponibilização do produto. Para conteúdo digital fornecido imediatamente, como o direito de remover anúncios, o arrependimento poderá ser limitado na medida permitida por lei se essa possibilidade tiver sido informada antes da compra e você tiver concordado com o fornecimento imediato.",
                    },
                    {
                        ko: "상품이 구매 화면의 표시·광고 내용과 다르거나 계약 내용과 다르게 제공된 경우에는 상품 제공일부터 3개월 이내 또는 그 사실을 안 날이나 알 수 있었던 날부터 30일 이내에 청약철회를 요청할 수 있습니다.",
                        en: "If a product differs from its description or advertising on the purchase screen, or is supplied differently from the contract, you may request withdrawal within three months after supply or within 30 days after you knew or reasonably could have known of the issue.",
                        "pt-BR": "Se o produto for diferente da descrição ou publicidade exibida na tela de compra, ou for fornecido em desacordo com o contrato, você poderá solicitar o arrependimento em até três meses após o fornecimento ou em até 30 dias após tomar conhecimento, ou poder razoavelmente ter tomado conhecimento, do problema.",
                    },
                    {
                        ko: "결제 취소와 환불은 관계 법령 및 실제 결제가 이루어진 Google Play 또는 Apps in Toss의 절차에 따라 처리됩니다. 환불 또는 결제 취소가 완료되면 해당 구매로 제공된 광고제거권은 회수되며 광고가 다시 노출될 수 있습니다.",
                        en: "Cancellations and refunds are processed under applicable law and the procedures of the platform on which the purchase was made, either Google Play or Apps in Toss. When a refund or cancellation is completed, the no-ads entitlement granted by that purchase will be revoked and ads may appear again.",
                        "pt-BR": "Cancelamentos e reembolsos são processados conforme a legislação aplicável e os procedimentos da plataforma em que a compra foi realizada, Google Play ou Apps in Toss. Quando o reembolso ou cancelamento for concluído, o direito de remover anúncios concedido pela compra será revogado e os anúncios poderão voltar a aparecer.",
                    },
                    {
                        ko: "미성년자가 광고제거권을 포함한 유료상품을 구매하려는 경우에는 법정대리인의 동의가 필요합니다. 필요한 동의 없이 이루어진 결제는 관계 법령에 따라 미성년자 본인 또는 법정대리인이 취소할 수 있습니다. 다만 법정대리인이 처분을 허락한 재산의 범위에서 이루어진 결제 등 관계 법령상 취소가 제한되는 경우는 제외합니다.",
                        en: "A minor must obtain consent from a parent or legal guardian before purchasing paid products, including the no-ads entitlement. A purchase made without required consent may be cancelled by the minor or legal guardian as permitted by law, except where cancellation is legally restricted, such as a purchase made with property the guardian permitted the minor to use.",
                        "pt-BR": "O menor de idade deve obter o consentimento de um dos pais ou responsável legal antes de comprar produtos pagos, inclusive o direito de remover anúncios. Uma compra feita sem o consentimento necessário poderá ser cancelada pelo menor ou responsável conforme permitido por lei, salvo quando o cancelamento for legalmente limitado, como em compras feitas com recursos cuja utilização foi autorizada pelo responsável.",
                    },
                ],
            },
            {
                kind: "ads",
                title: {
                    ko: "광고 및 제3자 광고 서비스",
                    en: "Advertising and Third-Party Ad Services",
                    "pt-BR": "Anúncios e serviços de publicidade de terceiros",
                },
                paragraphs: [
                    {
                        ko: "서비스에는 배너, 전면, 보상형 광고 등 제3자 광고가 포함될 수 있습니다. 광고의 표시 방식과 빈도는 서비스 품질, 이용자 경험, 플랫폼 정책 및 관련 법령을 고려하여 변경될 수 있습니다.",
                        en: "The Service may include third-party advertisements, including banner, interstitial, and rewarded ads. The format and frequency of ads may change based on service quality, user experience, platform policies, and applicable law.",
                        "pt-BR": "O Serviço pode incluir anúncios de terceiros, como banners, intersticiais e anúncios recompensados. O formato e a frequência dos anúncios podem mudar considerando a qualidade do serviço, a experiência do usuário, as políticas das plataformas e a legislação aplicável.",
                    },
                    {
                        ko: "제3자 광고 또는 외부 링크를 통해 제공되는 상품, 서비스, 콘텐츠는 해당 제3자가 책임지고 제공하며, 회사는 회사의 고의 또는 중대한 과실이 없는 한 그 신뢰성, 적법성, 안전성 또는 거래 결과를 보증하지 않습니다.",
                        en: "Products, services, and content provided through third-party ads or external links are provided by the relevant third party. Unless caused by the Company's intent or gross negligence, the Company does not guarantee their reliability, legality, safety, or transaction results.",
                        "pt-BR": "Produtos, serviços e conteúdos oferecidos por anúncios de terceiros ou links externos são fornecidos pelo respectivo terceiro. Salvo em caso de dolo ou culpa grave da Empresa, a Empresa não garante sua confiabilidade, legalidade, segurança ou os resultados de transações.",
                    },
                    {
                        ko: "광고 식별자, 앱 이용 정보 등 광고와 관련한 정보 처리는 회사의 개인정보처리방침 및 각 광고 네트워크의 정책에 따릅니다.",
                        en: "Processing of ad-related information, such as advertising identifiers and app usage information, is governed by the Company's Privacy Policy and the policies of the relevant ad networks.",
                        "pt-BR": "O tratamento de informações relacionadas a anúncios, como identificadores de publicidade e informações de uso do app, segue a Política de Privacidade da Empresa e as políticas das redes de anúncios correspondentes.",
                    },
                ],
            },
            {
                kind: "push",
                title: {
                    ko: "푸시 알림 및 광고성 정보 수신",
                    en: "Push Notifications and Marketing Messages",
                    "pt-BR": "Notificações push e mensagens de marketing",
                },
                paragraphs: [
                    {
                        ko: "회사는 서비스 운영, 보안, 오류 대응, 중요 공지 등 서비스 이용에 필요한 비광고성 알림을 보낼 수 있습니다. 또한 이벤트, 업데이트, 혜택, 프로모션 등 광고성 푸시는 관련 법령상 예외가 인정되는 경우를 제외하고 이용자의 명시적인 사전 동의를 받은 경우에만 전송합니다.",
                        en: "The Company may send non-marketing notifications necessary for the Service, such as service operation notices, security notices, error responses, and important announcements. Marketing Push messages, such as events, updates, benefits, and promotions, will be sent only with your explicit prior consent unless an exception is permitted by applicable law.",
                        "pt-BR": "A Empresa pode enviar notificações não promocionais necessárias ao Serviço, como avisos de operação, segurança, resposta a erros e comunicados importantes. Mensagens de push de marketing, como eventos, atualizações, benefícios e promoções, serão enviadas apenas com seu consentimento prévio e explícito, salvo quando houver exceção permitida pela legislação aplicável.",
                    },
                    {
                        ko: "단말기 운영체제에서 알림을 허용하는 것은 광고성 정보 수신 동의와 별개입니다. 회사는 광고성 푸시 수신 동의, 수신거부 및 철회 기능을 운영체제 알림 권한과 구분하여 제공할 수 있습니다.",
                        en: "Allowing notifications in your device operating system is separate from consenting to receive marketing messages. The Company may provide Marketing Push consent, refusal, and withdrawal controls separately from operating-system notification permissions.",
                        "pt-BR": "Permitir notificações no sistema operacional do dispositivo é diferente de consentir o recebimento de mensagens de marketing. A Empresa pode oferecer controles de consentimento, recusa e revogação para push de marketing separadamente das permissões de notificação do sistema operacional.",
                    },
                    {
                        ko: "이용자는 앱 내 설정, 단말기 알림 설정 또는 고객지원 연락처를 통해 광고성 푸시 수신 동의를 언제든지 철회할 수 있습니다. 철회 후 회사는 광고성 푸시를 전송하지 않으며, 법령상 필요한 처리결과 통지 또는 서비스 운영에 필요한 비광고성 알림은 계속 발송될 수 있습니다.",
                        en: "You may withdraw Marketing Push consent at any time through in-app settings, device notification settings, or customer support. After withdrawal, the Company will not send Marketing Push messages, but may still send legally required processing notices or non-marketing notifications necessary to operate the Service.",
                        "pt-BR": "Você pode revogar o consentimento para push de marketing a qualquer momento pelas configurações do app, pelas configurações de notificação do dispositivo ou pelo atendimento ao cliente. Após a revogação, a Empresa não enviará mensagens de push de marketing, mas ainda poderá enviar avisos exigidos por lei ou notificações não promocionais necessárias para operar o Serviço.",
                    },
                    {
                        ko: "회사는 관련 법령에서 요구하는 경우 광고성 푸시에 \"(광고)\", 전송자 명칭 및 수신거부 방법을 표시합니다. 오후 9시부터 다음 날 오전 8시까지의 야간 광고성 정보는 별도의 사전 동의를 받은 경우에만 전송합니다.",
                        en: "Where required by applicable law, the Company will include labels such as \"(Ad)\", the sender name, and opt-out instructions in Marketing Push messages. Marketing messages during nighttime hours from 9:00 p.m. to 8:00 a.m. will be sent only with separate prior consent where required.",
                        "pt-BR": "Quando exigido pela legislação aplicável, a Empresa incluirá nas mensagens de push de marketing indicações como \"(Anúncio)\", o nome do remetente e instruções para descadastramento. Mensagens de marketing no período noturno, das 21h às 8h do dia seguinte, serão enviadas apenas com consentimento prévio separado quando isso for exigido.",
                    },
                ],
            },
            {
                kind: "user_conduct",
                title: {
                    ko: "이용자의 의무 및 금지행위",
                    en: "User Obligations and Prohibited Conduct",
                    "pt-BR": "Obrigações do usuário e condutas proibidas",
                },
                paragraphs: [
                    {
                        ko: "이용자는 본 약관, 운영정책, 플랫폼 정책, 관련 법령 및 공서양속을 준수하여 서비스를 이용해야 합니다.",
                        en: "You must use the Service in compliance with these Terms, operational policies, platform policies, applicable law, and public order and morals.",
                        "pt-BR": "Você deve usar o Serviço em conformidade com estes Termos, políticas operacionais, políticas das plataformas, legislação aplicável e bons costumes.",
                    },
                ],
                bullets: [
                    {
                        ko: "비인가 프로그램, 매크로, 봇, 자동화 도구, 치트, 해킹, 변조, 리버스 엔지니어링 또는 보안 우회 행위",
                        en: "Using unauthorized programs, macros, bots, automation tools, cheats, hacks, modifications, reverse engineering, or security circumvention",
                        "pt-BR": "Uso de programas não autorizados, macros, bots, ferramentas de automação, cheats, hacks, modificações, engenharia reversa ou burla de segurança",
                    },
                    {
                        ko: "버그, 오류, 취약점, 결제 또는 광고 시스템을 악용하거나 그 방법을 배포하는 행위",
                        en: "Abusing bugs, errors, vulnerabilities, payment systems, or advertising systems, or distributing methods to do so",
                        "pt-BR": "Exploração de bugs, erros, vulnerabilidades, sistemas de pagamento ou publicidade, ou distribuição de métodos para isso",
                    },
                    {
                        ko: "서비스, 콘텐츠, 계정, 게임 데이터, 아이템 또는 재화를 현금, 현물, 기타 경제적 가치와 교환하거나 알선하는 행위",
                        en: "Selling, brokering, or exchanging the Service, Content, accounts, game data, items, or currency for cash, goods, or other economic value",
                        "pt-BR": "Venda, intermediação ou troca do Serviço, Conteúdo, contas, dados do jogo, itens ou moedas por dinheiro, bens ou outro valor econômico",
                    },
                    {
                        ko: "타인의 권리 침해, 사칭, 허위 정보 제공, 부정 결제, 환불 악용, 업무 방해, 불법 또는 부적절한 목적의 이용",
                        en: "Infringing others' rights, impersonation, providing false information, fraudulent payments, refund abuse, service interference, or using the Service for illegal or inappropriate purposes",
                        "pt-BR": "Violação de direitos de terceiros, falsidade de identidade, fornecimento de informações falsas, pagamentos fraudulentos, abuso de reembolso, interferência no serviço ou uso do Serviço para fins ilegais ou inadequados",
                    },
                ],
            },
            {
                kind: "enforcement",
                title: {
                    ko: "이용 제한 및 계약 해지",
                    en: "Restrictions and Termination",
                    "pt-BR": "Restrições e encerramento",
                },
                paragraphs: [
                    {
                        ko: "회사는 이용자가 본 약관 또는 관련 정책을 위반하거나 서비스의 안정적 운영을 방해한다고 합리적으로 판단하는 경우, 경고, 콘텐츠 삭제, 기능 제한, 이용 정지, 데이터 초기화, 계약 해지 등 필요한 조치를 취할 수 있습니다.",
                        en: "If the Company reasonably determines that you violated these Terms or related policies, or disrupted stable operation of the Service, the Company may take necessary measures such as warnings, content removal, feature restrictions, suspension, data reset, or termination.",
                        "pt-BR": "Se a Empresa entender de forma razoável que você violou estes Termos ou políticas relacionadas, ou prejudicou a operação estável do Serviço, poderá adotar medidas necessárias, como advertências, remoção de conteúdo, restrição de funcionalidades, suspensão, redefinição de dados ou encerramento.",
                    },
                    {
                        ko: "이용 제한에 이의가 있는 이용자는 고객지원 연락처를 통해 사유와 증빙자료를 제출할 수 있으며, 회사는 합리적인 범위에서 이를 검토합니다.",
                        en: "If you object to a restriction, you may submit reasons and supporting materials through customer support, and the Company will review them within a reasonable scope.",
                        "pt-BR": "Se você discordar de uma restrição, poderá apresentar seus motivos e documentos de apoio pelo atendimento ao cliente, e a Empresa os analisará dentro de um escopo razoável.",
                    },
                ],
            },
            {
                kind: "ip",
                title: {
                    ko: "지식재산권",
                    en: "Intellectual Property",
                    "pt-BR": "Propriedade intelectual",
                },
                paragraphs: [
                    {
                        ko: "서비스 및 콘텐츠에 관한 저작권, 상표권, 영업비밀, 데이터베이스권 및 기타 지식재산권은 회사 또는 정당한 권리자에게 귀속됩니다.",
                        en: "Copyrights, trademarks, trade secrets, database rights, and other intellectual property rights in the Service and Content belong to the Company or the rightful owners.",
                        "pt-BR": "Direitos autorais, marcas, segredos comerciais, direitos sobre bases de dados e outros direitos de propriedade intelectual relacionados ao Serviço e ao Conteúdo pertencem à Empresa ou aos respectivos titulares legítimos.",
                    },
                    {
                        ko: "이용자가 고객지원, 리뷰, 커뮤니티 또는 기타 경로로 의견, 제안, 오류 제보를 제공하는 경우, 회사는 서비스 개선 및 운영을 위해 이를 무상으로 사용할 수 있습니다. 다만 이용자의 개인정보 처리는 개인정보처리방침에 따릅니다.",
                        en: "If you provide feedback, suggestions, or bug reports through customer support, reviews, communities, or other channels, the Company may use them free of charge to improve and operate the Service. Processing of personal information is governed by the Privacy Policy.",
                        "pt-BR": "Se você enviar comentários, sugestões ou relatos de erro por atendimento ao cliente, avaliações, comunidades ou outros canais, a Empresa poderá usá-los gratuitamente para melhorar e operar o Serviço. O tratamento de dados pessoais seguirá a Política de Privacidade.",
                    },
                ],
            },
            {
                kind: "privacy",
                title: {
                    ko: "개인정보 보호",
                    en: "Privacy",
                    "pt-BR": "Privacidade",
                },
                paragraphs: [
                    {
                        ko: "회사는 관련 개인정보 보호 법령을 준수하며, 서비스 이용 과정에서 처리되는 개인정보의 항목, 목적, 보유기간, 제3자 서비스 및 이용자의 권리는 별도 개인정보처리방침에서 안내합니다.",
                        en: "The Company complies with applicable privacy laws. The types of personal information processed through the Service, purposes, retention periods, third-party services, and user rights are described in the separate Privacy Policy.",
                        "pt-BR": "A Empresa cumpre as leis de privacidade aplicáveis. As categorias de dados pessoais tratados por meio do Serviço, as finalidades, prazos de retenção, serviços de terceiros e direitos dos usuários estão descritos na Política de Privacidade separada.",
                    },
                    {
                        ko: "이용자는 서비스 이용 전 개인정보처리방침을 확인해야 하며, 개인정보처리방침은 본 약관과 함께 서비스 이용에 적용됩니다.",
                        en: "You should review the Privacy Policy before using the Service. The Privacy Policy applies together with these Terms.",
                        "pt-BR": "Você deve consultar a Política de Privacidade antes de usar o Serviço. A Política de Privacidade se aplica juntamente com estes Termos.",
                    },
                ],
            },
            {
                kind: "third_party",
                title: {
                    ko: "제3자 플랫폼 및 외부 서비스",
                    en: "Third-Party Platforms and External Services",
                    "pt-BR": "Plataformas de terceiros e serviços externos",
                },
                paragraphs: [
                    {
                        ko: "Google Play 버전은 Google Play Billing과 RevenueCat을 통해 광고제거권의 가격 조회, 결제, 구매 확인, 구매 복구 및 환불 상태 확인 기능을 제공합니다. Apps in Toss 버전은 Apps in Toss 로그인/IAP와 디스크팩토리가 운영하는 Cloudflare Worker/D1 구매 서버를 통해 같은 기능을 제공합니다. 두 결제 경로는 동일한 광고제거권 구매 처리에 함께 사용되지 않습니다.",
                        en: "The Google Play version uses Google Play Billing and RevenueCat to retrieve prices, process payments, verify or restore purchases, and confirm refund status for the no-ads entitlement. The Apps in Toss version provides those functions through Apps in Toss login/IAP and DiskFactory's Cloudflare Worker/D1 purchase server. The two purchase paths are not used together for the same no-ads purchase.",
                        "pt-BR": "A versão do Google Play usa o Google Play Billing e a RevenueCat para consultar preços, processar pagamentos, verificar ou restaurar compras e confirmar o status de reembolso do direito de remover anúncios. A versão do Apps in Toss oferece essas funções pelo login/IAP do Apps in Toss e pelo servidor de compras Cloudflare Worker/D1 operado pela DiskFactory. Os dois fluxos não são usados juntos na mesma compra do direito de remover anúncios.",
                    },
                    {
                        ko: "외부 플랫폼을 통한 결제에는 실제 결제가 이루어진 플랫폼의 이용약관, 결제정책 및 환불정책이 함께 적용됩니다. 이용자는 해당 외부 플랫폼의 정책을 확인하고 준수해야 합니다.",
                        en: "Purchases through an external platform are also subject to the terms, payment policies, and refund policies of the platform on which the purchase was actually made. You must review and comply with the applicable platform policies.",
                        "pt-BR": "Compras realizadas por uma plataforma externa também estão sujeitas aos termos e às políticas de pagamento e reembolso da plataforma em que a compra foi efetivamente feita. Você deve consultar e cumprir as políticas aplicáveis.",
                    },
                    {
                        ko: "제3자 서비스의 장애, 정책 변경, 계정 제한, 결제 처리, 네트워크 요금 또는 기기 환경으로 인해 서비스 이용이 제한될 수 있습니다.",
                        en: "Your use of the Service may be limited due to third-party service failures, policy changes, account restrictions, payment processing, network charges, or device environments.",
                        "pt-BR": "Seu uso do Serviço pode ser limitado por falhas de serviços de terceiros, mudanças de política, restrições de conta, processamento de pagamentos, tarifas de rede ou condições do dispositivo.",
                    },
                ],
            },
            {
                kind: "changes",
                title: {
                    ko: "약관의 변경",
                    en: "Changes to These Terms",
                    "pt-BR": "Alterações destes Termos",
                },
                paragraphs: [
                    {
                        ko: "회사는 관련 법령을 위반하지 않는 범위에서 본 약관을 변경할 수 있습니다. 변경 시 적용일, 변경 내용 및 사유를 서비스 내 공지, 웹페이지 게시 또는 기타 적절한 방법으로 사전에 안내합니다.",
                        en: "The Company may change these Terms to the extent permitted by applicable law. When changes are made, the Company will provide prior notice of the effective date, details, and reasons through in-service notices, webpages, or other appropriate methods.",
                        "pt-BR": "A Empresa pode alterar estes Termos na medida permitida pela legislação aplicável. Quando houver alterações, a Empresa informará previamente a data de vigência, o conteúdo e os motivos por avisos no Serviço, páginas web ou outros meios adequados.",
                    },
                    {
                        ko: "이용자에게 불리하거나 중요한 변경은 원칙적으로 적용일 30일 전부터 안내합니다. 이용자가 변경 약관에 동의하지 않는 경우 서비스 이용을 중단하고 계약 해지를 요청할 수 있습니다.",
                        en: "Material or disadvantageous changes will generally be notified at least 30 days before they take effect. If you do not agree to changed Terms, you may stop using the Service and request termination.",
                        "pt-BR": "Alterações relevantes ou desfavoráveis ao usuário serão, em regra, comunicadas com pelo menos 30 dias de antecedência da entrada em vigor. Se você não concordar com os Termos alterados, poderá deixar de usar o Serviço e solicitar o encerramento.",
                    },
                ],
            },
            {
                kind: "liability",
                title: {
                    ko: "보증의 부인 및 책임 제한",
                    en: "Disclaimer and Limitation of Liability",
                    "pt-BR": "Isenção de garantias e limitação de responsabilidade",
                },
                paragraphs: [
                    {
                        ko: "서비스는 현재 제공 가능한 상태로 제공되며, 회사는 관련 법령상 요구되는 범위를 초과하여 서비스가 중단 없이 제공되거나 모든 오류가 수정되거나 이용자의 특정 목적을 충족한다고 보증하지 않습니다.",
                        en: "The Service is provided as available. To the extent beyond what is required by applicable law, the Company does not warrant that the Service will be uninterrupted, error-free, or fit for your particular purpose.",
                        "pt-BR": "O Serviço é fornecido conforme disponível. Na medida que exceder o exigido pela legislação aplicável, a Empresa não garante que o Serviço será ininterrupto, livre de erros ou adequado a uma finalidade específica sua.",
                    },
                    {
                        ko: "회사는 무료 서비스 이용과 관련하여 발생한 손해에 대해 회사의 고의 또는 중대한 과실이 있거나 관련 법령상 책임 제한이 허용되지 않는 경우를 제외하고 책임을 지지 않습니다.",
                        en: "The Company is not liable for damages arising from use of free services, except where caused by the Company's intent or gross negligence, or where limitation of liability is not permitted by applicable law.",
                        "pt-BR": "A Empresa não se responsabiliza por danos decorrentes do uso de serviços gratuitos, exceto quando causados por dolo ou culpa grave da Empresa, ou quando a limitação de responsabilidade não for permitida pela legislação aplicável.",
                    },
                    {
                        ko: "회사의 귀책사유로 광고제거권을 정상적으로 제공하거나 복구할 수 없는 경우 회사는 관계 법령과 실제 결제가 이루어진 플랫폼의 절차에 따라 복구, 대체 제공 또는 환불에 필요한 조치를 합니다.",
                        en: "If the no-ads entitlement cannot be provided or restored due to a cause attributable to the Company, the Company will take steps necessary to restore or replace the entitlement or process a refund under applicable law and the procedures of the platform on which the purchase was made.",
                        "pt-BR": "Se o direito de remover anúncios não puder ser fornecido ou restaurado por motivo atribuível à Empresa, a Empresa tomará as medidas necessárias para restaurar ou substituir o direito ou processar o reembolso conforme a legislação aplicável e os procedimentos da plataforma em que a compra foi realizada.",
                    },
                ],
            },
            {
                kind: "law",
                title: {
                    ko: "준거법 및 분쟁 해결",
                    en: "Governing Law and Dispute Resolution",
                    "pt-BR": "Lei aplicável e resolução de disputas",
                },
                paragraphs: [
                    {
                        ko: "본 약관과 서비스 이용에는 대한민국 법령이 적용됩니다. 다만 이용자의 거주 국가에서 강행적으로 적용되는 소비자 보호 법령이나 관할 규정이 있는 경우 해당 규정이 우선할 수 있습니다.",
                        en: "These Terms and your use of the Service are governed by the laws of the Republic of Korea. However, mandatory consumer protection laws or jurisdiction rules in your country of residence may prevail where applicable.",
                        "pt-BR": "Estes Termos e o uso do Serviço são regidos pelas leis da República da Coreia. No entanto, leis obrigatórias de proteção ao consumidor ou regras de jurisdição do seu país de residência poderão prevalecer quando aplicáveis.",
                    },
                    {
                        ko: "서비스와 관련한 분쟁은 우선 회사의 고객지원 연락처를 통해 성실히 협의하여 해결합니다. 협의로 해결되지 않는 분쟁은 관련 법령이 정한 관할 법원 또는 대한민국 서울중앙지방법원을 관할 법원으로 합니다.",
                        en: "Disputes related to the Service should first be addressed in good faith through the Company's customer support contact. If not resolved by consultation, disputes will be submitted to the competent court under applicable law or to the Seoul Central District Court in the Republic of Korea.",
                        "pt-BR": "Disputas relacionadas ao Serviço deverão primeiro ser tratadas de boa-fé pelo contato de atendimento ao cliente da Empresa. Se não forem resolvidas por negociação, serão submetidas ao tribunal competente conforme a legislação aplicável ou ao Tribunal Distrital Central de Seul, na República da Coreia.",
                    },
                    {
                        ko: "본 약관이 다른 언어로 번역되어 제공되는 경우, 해석상 충돌이 있으면 관련 법령에서 달리 정하지 않는 한 한국어본을 우선합니다.",
                        en: "If these Terms are provided in another language and there is a conflict in interpretation, the Korean version will prevail unless applicable law requires otherwise.",
                        "pt-BR": "Se estes Termos forem fornecidos em outro idioma e houver conflito de interpretação, a versão em coreano prevalecerá, salvo se a legislação aplicável exigir de outra forma.",
                    },
                ],
            },
            {
                kind: "contact",
                title: {
                    ko: "문의",
                    en: "Contact",
                    "pt-BR": "Contato",
                },
                paragraphs: [
                    {
                        ko: "본 약관, 서비스 이용, 광고성 푸시 수신 동의 철회 또는 분쟁 처리에 관한 문의는 아래 이메일로 연락해 주세요.",
                        en: "For questions about these Terms, use of the Service, withdrawal of Marketing Push consent, or dispute handling, please contact the email address below.",
                        "pt-BR": "Para dúvidas sobre estes Termos, uso do Serviço, revogação do consentimento para push de marketing ou tratamento de disputas, entre em contato pelo e-mail abaixo.",
                    },
                    {
                        ko: "이메일: contact@diskfactory.app",
                        en: "Email: contact@diskfactory.app",
                        "pt-BR": "E-mail: contact@diskfactory.app",
                    },
                ],
            },
        ],
    },
    {
        slug: "uptiger",
        appName: koOnly("눈 떠보니 호랑이"),
        projectId: "uptiger",
        privacySlug: "uptiger",
        supportedLocales: ["ko"],
        summary: koOnly("본 약관은 디스크팩토리가 제공하는 모바일 게임 '눈 떠보니 호랑이'와 관련 서비스의 이용조건 및 회사와 이용자의 권리·의무를 정합니다."),
        introduction: koOnly("본 약관은 디스크팩토리(이하 \"회사\")가 제공하는 모바일 게임 '눈 떠보니 호랑이'와 관련 서비스(이하 \"서비스\")의 이용조건 및 회사와 이용자의 권리·의무를 정합니다."),
        effectiveDate: "2026-07-14",
        contactEmail: "contact@diskfactory.app",
        sections: [
            {
                kind: "purpose",
                title: koOnly("1. 목적 및 적용"),
                paragraphs: [
                    koOnly("본 약관은 서비스에 표시되거나 연결된 때부터 적용됩니다. 서비스에는 게임 플레이, 광고, 리더보드, 구매·구독 및 이에 부수되는 기능이 포함됩니다."),
                ],
            },
            {
                kind: "eligibility",
                title: koOnly("2. 이용자와 미성년자"),
                paragraphs: [
                    koOnly("서비스는 별도 회원가입 없이 이용할 수 있으며, 일부 기능은 Apps in Toss, Google Play 또는 Apple App Store 등 플랫폼 계정이나 기능을 이용할 수 있습니다."),
                    koOnly("서비스는 만 14세 미만 아동을 주된 대상으로 하지 않습니다. 미성년자가 유료상품을 구매하려는 경우에는 법정대리인의 동의가 필요하며, 필요한 동의 없이 이루어진 결제는 관계 법령에 따라 취소할 수 있습니다."),
                ],
            },
            {
                kind: "service",
                title: koOnly("3. 서비스 제공과 변경"),
                paragraphs: [
                    koOnly("일부 기능과 제공 방식은 이용 플랫폼, 기기, 운영체제 및 앱 버전에 따라 다를 수 있습니다. 인터넷 연결이나 플랫폼 이용에 따른 통신요금은 이용자가 부담합니다."),
                    koOnly("회사는 운영상 또는 기술상 필요한 경우 서비스를 변경하거나 일시 중단할 수 있습니다. 이용자에게 중대한 영향을 주는 변경 또는 서비스 종료는 합리적인 기간 전에 안내합니다."),
                ],
            },
            {
                kind: "payments",
                title: koOnly("4. 월간 구독, 해지 및 환불"),
                paragraphs: [
                    koOnly("월간 구독은 1개월 단위로 자동 갱신되는 상품입니다. 정확한 상품명, 가격, 이용기간 및 제공 혜택은 구매 화면에 표시됩니다."),
                    koOnly("결제는 이용자가 선택한 플랫폼을 통해 이루어지며, 이용자가 해지하기 전까지 해당 플랫폼의 결제정책에 따라 자동 갱신될 수 있습니다."),
                    koOnly("이용자는 각 플랫폼의 구독 관리 기능 또는 고객지원 절차를 통해 다음 결제를 취소할 수 있습니다. 앱을 삭제하는 것만으로는 구독이 취소되지 않으며, 취소 후에도 이미 결제한 이용기간이 끝날 때까지 혜택을 이용할 수 있습니다."),
                    koOnly("이용자는 관계 법령이 정한 날부터 7일 이내 청약철회를 할 수 있습니다. 다만 즉시 제공된 디지털콘텐츠 등 법령상 제한 사유를 사전에 안내받고 제공 개시에 동의한 경우에는 제한될 수 있으며, 나누어 제공되는 콘텐츠의 미제공 부분은 예외입니다."),
                    koOnly("적법한 청약철회가 접수되면 회사는 관계 법령에 따라 3영업일 이내 환급에 필요한 조치를 합니다. 실제 환급 반영 시점은 결제 플랫폼의 처리 일정에 따라 달라질 수 있습니다."),
                    koOnly("구매 복구, 결제 취소 및 환불은 관계 법령과 결제가 이루어진 Apps in Toss, Google Play 또는 Apple App Store의 절차에 따릅니다. 환불 또는 결제 취소가 완료되면 해당 상품의 혜택이 회수될 수 있습니다."),
                ],
            },
            {
                kind: "user_conduct",
                title: koOnly("5. 이용자의 의무"),
                paragraphs: [
                    koOnly("이용자는 본 약관, 플랫폼 정책 및 관련 법령을 준수하여 서비스를 이용해야 하며 다음 행위를 해서는 안 됩니다."),
                ],
                bullets: [
                    koOnly("서비스, 광고 또는 결제 기능을 부정하게 이용하는 행위"),
                    koOnly("프로그램을 변조하거나 비정상적인 방법으로 게임 결과를 조작하는 행위"),
                    koOnly("서비스 운영을 방해하거나 다른 이용자 또는 제3자의 권리를 침해하는 행위"),
                    koOnly("법령 또는 공서양속에 위반되는 행위"),
                ],
            },
            {
                kind: "enforcement",
                title: koOnly("6. 이용 제한"),
                paragraphs: [
                    koOnly("회사는 위반행위가 확인된 경우 위반 정도와 영향을 고려하여 경고, 기록 반영 제한, 기능 제한 또는 서비스 이용 제한 등 필요한 조치를 할 수 있습니다. 이용자는 contact@diskfactory.app을 통해 이의를 제기할 수 있습니다."),
                ],
            },
            {
                kind: "ip",
                title: koOnly("7. 지식재산권"),
                paragraphs: [
                    koOnly("서비스의 프로그램, 그래픽, 음악, 문구, 상표 및 그 밖의 콘텐츠에 관한 권리는 회사 또는 정당한 권리자에게 있습니다."),
                    koOnly("이용자는 개인적이고 비영리적인 범위에서만 서비스를 이용할 수 있으며, 법령상 허용되는 경우를 제외하고 서비스를 복제·배포·변조·역설계하거나 영리적으로 이용해서는 안 됩니다."),
                ],
            },
            {
                kind: "privacy",
                title: koOnly("8. 개인정보 보호 및 외부 서비스"),
                paragraphs: [
                    koOnly("개인정보 처리에 관한 사항은 별도로 공개하는 '눈 떠보니 호랑이 개인정보처리방침'에 따릅니다."),
                    koOnly("서비스는 Apps in Toss, Google Play, Apple App Store, 광고·분석 및 결제·구독 서비스 등 외부 플랫폼을 이용할 수 있으며, 해당 서비스의 이용에는 각 사업자의 약관과 정책이 함께 적용될 수 있습니다."),
                ],
            },
            {
                kind: "liability",
                title: koOnly("9. 책임"),
                paragraphs: [
                    koOnly("회사는 천재지변, 통신망 또는 플랫폼 장애, 이용자의 귀책사유 등 회사가 합리적으로 통제하기 어려운 사유로 발생한 손해에 대해서는 책임을 지지 않습니다."),
                    koOnly("다만 회사의 고의 또는 과실로 이용자에게 손해가 발생한 경우에는 관계 법령에 따라 책임을 부담하며, 본 약관은 법률상 배제할 수 없는 소비자의 권리를 제한하지 않습니다."),
                ],
            },
            {
                kind: "changes",
                title: koOnly("10. 약관의 변경"),
                paragraphs: [
                    koOnly("회사는 법령 또는 서비스 변경에 따라 본 약관을 개정할 수 있습니다. 일반적인 변경은 시행 7일 전, 이용자에게 불리한 중요한 변경은 시행 30일 전부터 서비스 또는 관련 페이지를 통해 안내합니다."),
                    koOnly("법령상 별도의 동의가 필요한 변경은 해당 절차를 따릅니다."),
                ],
            },
            {
                kind: "law",
                title: koOnly("11. 준거법 및 분쟁해결"),
                paragraphs: [
                    koOnly("본 약관에는 대한민국 법령이 적용됩니다. 분쟁이 발생한 경우 회사와 이용자는 원만한 해결을 위해 협의하며, 해결되지 않는 경우 관계 법령에 따른 관할법원에서 해결합니다."),
                ],
            },
            {
                kind: "contact",
                title: koOnly("12. 사업자 정보 및 문의"),
                paragraphs: [
                    koOnly("서비스, 결제, 환불 또는 본 약관에 관한 문의는 contact@diskfactory.app으로 접수할 수 있습니다."),
                ],
                bullets: [
                    koOnly("상호: 디스크팩토리"),
                    koOnly("대표자: 여재훈"),
                    koOnly("사업자등록번호: 831-74-00614"),
                    koOnly("통신판매업 신고번호: 2026-서울마포-1049"),
                    koOnly("주소: 서울특별시 마포구 월드컵로 196, B105-E176호"),
                    koOnly("이메일: contact@diskfactory.app"),
                ],
            },
        ],
    },
];
