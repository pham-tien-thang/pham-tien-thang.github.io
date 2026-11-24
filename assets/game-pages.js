(() => {
    const animalWarStoreUrls = {
        googlePlay: "https://play.google.com/store/apps/details?id=com.mclabs.animal_war",
        appStore: null, // Set to https://apps.apple.com/app/id<Apple App ID> when available.
    };

    const commonCopy = {
    "vi": {
        "skipLink": "Bỏ qua điều hướng",
        "navAria": "Điều hướng chính",
        "languageAria": "Chọn ngôn ngữ",
        "navHome": "Trang chủ",
        "navTarot": "Bí ẩn Tarot",
        "heroAction": "Khám phá lối chơi",
        "heroStatus": "Dự án đang phát triển",
        "gameplayEyebrow": "Lối chơi",
        "homeAction": "Tất cả sản phẩm",
        "footerAria": "Liên kết cuối trang",
        "footerPrivacy": "Chính sách quyền riêng tư",
        "galleryAction": "Xem hình ảnh",
        "galleryEyebrow": "Hình ảnh trong game",
        "galleryHint": "Chọn ảnh để xem kích thước lớn.",
        "development": "Đang phát triển"
    },
    "en": {
        "skipLink": "Skip navigation",
        "navAria": "Primary navigation",
        "languageAria": "Choose language",
        "navHome": "Home",
        "navTarot": "Tarot Mysteries",
        "heroAction": "Explore gameplay",
        "heroStatus": "In development",
        "gameplayEyebrow": "Gameplay",
        "homeAction": "All products",
        "footerAria": "Footer links",
        "footerPrivacy": "Privacy Policy",
        "galleryAction": "View screenshots",
        "galleryEyebrow": "Inside the game",
        "galleryHint": "Select an image to view it at full size.",
        "development": "In development"
    }
};

    const gameCopy = {
    "animal-war": {
        "vi": {
            "googlePlayDownload": "Tải trên Google Play",
            "appStoreDownload": "Tải trên App Store",
            "appStorePending": "App Store · Chưa có bản tải",
            "pageTitle": "Animal War: World Conquest I | Mèo cưng",
            "pageDescription": "Lãnh đạo một quốc gia động vật trong Animal War. Ngoại giao, kết liên minh, giao thương, tuyên chiến và đô hộ hoặc thống trị các lãnh thổ khác.",
            "heroEyebrow": "Grand strategy · Chinh phục thế giới",
            "heroLead": "Bạn sẽ lãnh đạo một quốc gia của các loài động vật, gây dựng thế lực và quyết định vận mệnh lãnh thổ. Kết đồng minh, mở giao thương hay tuyên chiến — mỗi lựa chọn đều có thể thay đổi bản đồ thế giới.",
            "gameplayTitle": "Cầm quyền một quốc gia. Viết lại trật tự thế giới.",
            "featureOneTitle": "Lãnh đạo và phát triển quốc gia",
            "featureOneLead": "Nắm quyền điều hành một quốc gia động vật. Theo dõi ngân sách, cân đối nguồn thu và chi phí để xây dựng nền kinh tế, phát triển công nghệ và nuôi dưỡng sức mạnh quân sự.",
            "featureTwoTitle": "Ngoại giao và kết liên minh",
            "featureTwoLead": "Gây dựng quan hệ với các lãnh thổ xung quanh, tìm đồng minh và thương lượng để cùng bảo vệ lợi ích. Một quyết định ngoại giao đúng lúc có thể thay đổi cả cán cân quyền lực.",
            "featureThreeTitle": "Giao thương với các láng giềng",
            "featureThreeLead": "Mở đường giao thương để trao đổi nguồn lực với các quốc gia xung quanh. Chọn hàng hóa, cân nhắc giá cả và tận dụng nguồn cung để chuẩn bị cho những kế hoạch lớn hơn.",
            "otherAction": "Khám phá Age of Dynasties",
            "featureOneCaption": "Ngân sách quốc gia: kho bạc, thu nhập và chi phí.",
            "featureOneAlt": "Ngân sách quốc gia: kho bạc, thu nhập và chi phí.",
            "featureTwoCaption": "Ngoại giao với lãnh thổ láng giềng và đề nghị liên minh.",
            "featureTwoAlt": "Ngoại giao với lãnh thổ láng giềng và đề nghị liên minh.",
            "featureThreeCaption": "Popup Giao thương: lựa chọn hàng hóa và giao dịch giữa hai lãnh thổ.",
            "featureThreeAlt": "Popup Giao thương: lựa chọn hàng hóa và giao dịch giữa hai lãnh thổ.",
            "featureFourTitle": "Tuyên chiến và mở rộng quyền lực",
            "featureFourLead": "Khi đàm phán không còn là lựa chọn, tuyên chiến và đưa quân vượt biên giới. Giành thắng lợi để đô hộ, sáp nhập và từng bước thống trị các lãnh thổ khác.",
            "featureFourCaption": "Popup Tuyên chiến: xem điều kiện trước khi phát động chiến tranh.",
            "featureFourAlt": "Popup Tuyên chiến: xem điều kiện trước khi phát động chiến tranh."
        },
        "en": {
            "googlePlayDownload": "Get it on Google Play",
            "appStoreDownload": "Download on the App Store",
            "appStorePending": "App Store · Not available yet",
            "pageTitle": "Animal War: World Conquest I | Mèo cưng",
            "pageDescription": "Lead an animal nation in Animal War. Shape diplomacy, forge alliances, trade with neighbors, declare war, and subjugate or conquer rival territories.",
            "heroEyebrow": "Grand strategy · World conquest",
            "heroLead": "Lead a nation of animals, build its power, and decide its fate. Forge alliances, open trade, or declare war — every choice can redraw the world map.",
            "gameplayTitle": "Lead a nation. Reshape the world order.",
            "featureOneTitle": "Lead and develop your nation",
            "featureOneLead": "Take command of an animal nation. Track your treasury, income, and expenses to develop the economy, advance technology, and sustain your military strength.",
            "featureTwoTitle": "Shape diplomacy and forge alliances",
            "featureTwoLead": "Build relations with neighboring territories and negotiate alliances to protect shared interests. A timely diplomatic decision can shift the balance of power.",
            "featureThreeTitle": "Trade with neighboring territories",
            "featureThreeLead": "Open trade routes to exchange resources with surrounding nations. Choose goods, weigh prices, and secure the supplies your next ambitions demand.",
            "otherAction": "Explore Age of Dynasties",
            "featureOneCaption": "The Budget drawer: national treasury, income, and expenses.",
            "featureOneAlt": "The Budget drawer: national treasury, income, and expenses.",
            "featureTwoCaption": "Diplomacy with a neighboring territory and an alliance proposal.",
            "featureTwoAlt": "Diplomacy with a neighboring territory and an alliance proposal.",
            "featureThreeCaption": "The Trading popup: goods and transactions between two territories.",
            "featureThreeAlt": "The Trading popup: goods and transactions between two territories.",
            "featureFourTitle": "Declare war and expand your rule",
            "featureFourLead": "When negotiations run their course, declare war and march across the border. Win the right to subjugate or annex rival territories and extend your dominion.",
            "featureFourCaption": "The Declare War popup: review the terms before starting a war.",
            "featureFourAlt": "The Declare War popup: review the terms before starting a war."
        }
    },
    "age-of-dynasties": {
    "vi": {
        "pageTitle": "Age of Dynasties | Mèo cưng",
        "pageDescription": "Age of Dynasties — xây dựng căn cứ, chỉ huy quân đội và làm chủ chiến trường trong Thủ thành, Công thành, Đấu thường và Thử thách.",
        "heroEyebrow": "Chiến thuật thời gian thực",
        "heroLead": "Xây dựng căn cứ, phối hợp bộ binh, cung thủ, kỵ binh và khí giới công thành. Giữ vững phòng tuyến, dẫn quân chinh phục thành trì hoặc vượt qua những thử thách riêng biệt — mỗi chiến trường đòi hỏi một cách cầm quân.",
        "gameplayTitle": "Chọn chiến trường. Làm chủ cuộc chiến.",
        "galleryHint": "Chọn ảnh để xem kích thước lớn. Các cảnh trong game được dàn dựng để giới thiệu lối chơi.",
        "otherAction": "Khám phá Animal War",
        "featureOneTitle": "Chọn chiến trường của bạn",
        "featureOneLead": "Giữ thành trước các đợt tiến công, dẫn quân công phá phòng tuyến, xây dựng đế chế trong Đấu thường hoặc vượt qua từng màn Thử thách. Thao trường luôn sẵn sàng để bạn luyện điều binh và thử đội hình mới.",
        "featureOneCaption": "Menu hiện tại với Đấu thường, Thủ thành, Công thành, Thử thách và Thao trường.",
        "featureOneAlt": "Menu Age of Dynasties hiện tại với năm lựa chọn chế độ chơi, không hiển thị cửa hàng.",
        "featureTwoTitle": "Thủ thành",
        "featureTwoLead": "Bố trí cung thủ sau chiến tuyến, đưa bộ binh giữ cổng và xây thêm công trình hỗ trợ. Phối hợp quân đội, tháp canh và kỹ năng để bảo vệ căn cứ trước những đợt tiến công ngày càng mạnh.",
        "featureTwoCaption": "Toàn màn Thủ thành: giao tranh ở cổng, minimap, tài nguyên, trạng thái đợt tiến công và bốn kỹ năng.",
        "featureTwoAlt": "Toàn màn Thủ thành với minimap, tài nguyên, trạng thái đợt 4 và bốn kỹ năng; các cụm quân giao chiến ở cổng, có quân ngã và tên cắm đất.",
        "featureThreeTitle": "Công thành",
        "featureThreeLead": "Dẫn quân áp sát thành trì, dùng cẩu đá và xe nỏ yểm trợ lực lượng xung kích. Phối hợp các mũi tiến công, phá phòng tuyến và tiến sâu vào căn cứ đối phương.",
        "featureThreeCaption": "Toàn màn Công thành: cẩu đá yểm trợ giao tranh, kèm minimap, thanh trạng thái và kỹ năng.",
        "featureThreeAlt": "Toàn màn Công thành với minimap, tài nguyên, thanh thời gian và cụm kỹ năng; bộ binh đánh qua đoạn tường vỡ dưới sự yểm trợ của khí giới.",
        "featureFourTitle": "Đấu thường",
        "featureFourLead": "Chọn từ hai đến bốn nền văn minh, chia đội và đối đầu với bot ở ba mức khó. Thu gom tài nguyên, xây dựng căn cứ, tuyển quân và nâng cấp để tạo lợi thế trước khi đưa quân quyết chiến.",
        "featureFourCaption": "Đấu thường: căn cứ đang phát triển, nhóm kỵ binh được chọn và thanh lệnh điều khiển phía dưới.",
        "featureFourAlt": "Toàn màn Đấu thường với minimap, thanh tài nguyên và thời gian; ba kỵ binh được chọn có vòng chọn xanh, thanh lệnh hiện phía dưới giữa cảnh xây dựng và giao tranh.",
        "featureFiveTitle": "Thử thách",
        "featureFiveLead": "Mỗi màn đặt ra một nhiệm vụ và tình thế riêng, buộc bạn tận dụng lực lượng đang có. Từ né đòn, vượt trận địa đến tìm đường về căn cứ, hãy tính thời điểm di chuyển và hoàn thành từng mục tiêu để mở màn tiếp theo.",
        "featureFiveCaption": "Màn 3 · So tài: hai cẩu đá đối đầu, vừa né đạn vừa tìm thời cơ phản công giữa đấu trường.",
        "featureFiveAlt": "Toàn màn Thử thách 3 So tài với minimap, thanh trạng thái và hai kỹ năng; hai cẩu đá đối đầu, đạn đá đang bay và khán giả quanh đấu trường."
    },
    "en": {
        "pageTitle": "Age of Dynasties | Mèo cưng",
        "pageDescription": "Age of Dynasties — build your base, command your army, and master Tower Defense, Siege, Skirmish, and Challenges.",
        "heroEyebrow": "Real-time strategy",
        "heroLead": "Build your base and combine infantry, archers, cavalry, and siege engines. Hold the line, conquer a fortress, or overcome a focused challenge — each battlefield calls for a different strategy.",
        "gameplayTitle": "Choose your battlefield. Command the fight.",
        "galleryHint": "Select an image to view it full size. In-game scenes are staged to showcase gameplay.",
        "otherAction": "Explore Animal War",
        "featureOneTitle": "Choose your battlefield",
        "featureOneLead": "Defend against incoming waves, lead an assault on a fortress, build your power in Skirmish, or take on individual Challenges. Visit the Training Ground to practice commands and experiment with new formations.",
        "featureOneCaption": "The current menu: Skirmish, Tower Defense, Siege, Challenges, and Training Ground.",
        "featureOneAlt": "The current Age of Dynasties menu with five game modes and the store hidden.",
        "featureTwoTitle": "Tower Defense",
        "featureTwoLead": "Position archers behind the line, hold the gate with infantry, and build support structures. Combine troops, watchtowers, and skills to protect your base against increasingly powerful waves.",
        "featureTwoCaption": "The full Tower Defense screen: fighting at the gate, minimap, resources, wave status, and four skills.",
        "featureTwoAlt": "The full Tower Defense screen with minimap, resources, wave 4 status, and four skills; troops fight at the gate among fallen soldiers and embedded arrows.",
        "featureThreeTitle": "Siege",
        "featureThreeLead": "Advance on the fortress with catapults and ballistae covering your assault troops. Coordinate your attack, break the defensive line, and push into the enemy base.",
        "featureThreeCaption": "The full Siege screen: catapults cover the assault, with minimap, status bars, and skills visible.",
        "featureThreeAlt": "The full Siege screen with minimap, resources, time controls, and skills; infantry fight through a broken wall with support from siege engines.",
        "featureFourTitle": "Skirmish",
        "featureFourLead": "Choose two to four civilizations, form teams, and face bots at three difficulty levels. Gather resources, build your base, recruit troops, and research upgrades before committing your army to battle.",
        "featureFourCaption": "Skirmish: a growing base, a selected cavalry group, and the command bar along the bottom.",
        "featureFourAlt": "The full Skirmish screen with minimap, resources, and time controls; three selected cavalry units have green selection rings and a command bar below the construction and fighting.",
        "featureFiveTitle": "Challenges",
        "featureFiveLead": "Each mission presents a distinct objective and situation, asking you to make the most of the forces you have. Dodge attacks, cross hostile ground, or find your way home; time your moves and complete each objective to unlock the next mission.",
        "featureFiveCaption": "Challenge 3 · Duel: two catapults dodge incoming shots and look for an opening to return fire in the arena.",
        "featureFiveAlt": "The full Challenge 3 Duel screen with minimap, status bars, and two skills; two catapults exchange shots as spectators watch from around the arena."
    }
}
};

    const game = gameCopy[document.body.dataset.game];
    const languageButtons = document.querySelectorAll("[data-lang]");

    document.querySelectorAll("[data-store-link]").forEach((link) => {
        const store = link.dataset.storeLink;
        const url = animalWarStoreUrls[store];
        if (!url) return;

        link.href = url;
        link.removeAttribute("role");
        link.removeAttribute("aria-disabled");
        link.querySelector("[data-i18n]").dataset.i18n = store + "Download";
    });

    function setLanguage(language) {
        const selected = language === "en" ? "en" : "vi";
        const copy = { ...commonCopy[selected], ...game[selected] };

        document.documentElement.lang = selected;
        document.title = copy.pageTitle;
        document.querySelector('meta[name="description"]').content = copy.pageDescription;

        document.querySelectorAll("[data-i18n]").forEach((element) => {
            element.textContent = copy[element.dataset.i18n];
        });
        document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
            element.alt = copy[element.dataset.i18nAlt];
        });
        document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
            element.setAttribute("aria-label", copy[element.dataset.i18nAria]);
        });

        languageButtons.forEach((button) => {
            button.setAttribute("aria-pressed", String(button.dataset.lang === selected));
        });

        try {
            localStorage.setItem("site-language", selected);
        } catch {
            // Language selection still works without storage.
        }
    }

    languageButtons.forEach((button) => {
        button.addEventListener("click", () => setLanguage(button.dataset.lang));
    });

    let initialLanguage = "vi";
    try {
        initialLanguage = localStorage.getItem("site-language") || "vi";
    } catch {
        // Use the default language when storage is unavailable.
    }
    setLanguage(initialLanguage);
})();
