// Initialize Lucide Icons
lucide.createIcons();

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = mobileMenu.querySelectorAll('a');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    const icon = mobileMenu.classList.contains('active') ? 'x' : 'menu';
    menuToggle.innerHTML = `<i data-lucide="${icon}"></i>`;
    lucide.createIcons();
});

// Close mobile menu on clicking a link
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        menuToggle.innerHTML = `<i data-lucide="menu"></i>`;
        lucide.createIcons();
    });
});

// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

// Judge Profiles Data
const judgeProfiles = {
    tomita: {
        name: "富田 誠",
        title: "東海大学<br>教養学部芸術学科<br>教授",
        img: "./assets/judge_tomita.jpeg",
        profile: "武蔵野美術大学基礎デザイン学科卒業。早稲田大学大学院国際情報通信研究科修了。デザインエンジニアリング系のスタートアップ創業、早稲田大学政治学研究科助手などを経て、現職。他に、厚生労働省広報室参与、年金広報構成員、総務省行政評価局アドバイザー、日本デザイン学会理事など。近年は様々な人たちによる共創を支援するための視覚的対話に取り組むほか、「みんなが作れるポンチ絵Project」を主催（<a href='https://tomita.me/visuallogue/punch/' target='_blank'>https://tomita.me/visuallogue/punch/</a>）。"
    },
    kikuchi: {
        name: "菊地 英明",
        title: "厚生労働省<br>年金局<br>総務課長補佐",
        img: "https://ui-avatars.com/api/?name=Judge+2&background=93D5CC&color=328176&size=150",
        profile: "厚生労働省に入省後、年金制度改正や社会保障協定、広報に携わり、広報コンテンツ制作や公的年金シミュレーター（<a href='https://nenkin-shisan.mhlw.go.jp/' target='_blank'>https://nenkin-shisan.mhlw.go.jp/</a>）の設計・リリースを主導。年金広報コンテンツは国連ILO（国際労働機関）の関係機関である国際社会保障協会の「ISSA Good Practice Award competition for Asia and the Pacific」において２回連続で特別優秀賞を受賞する。復興庁の「持続可能な復興広報を考える検討会議」にも従事するとともに、現在は内閣府において〇〇を担当する。"
    },
    tokuda: {
        name: "徳田 加奈",
        title: "RA協議会<br>スキルプログラム専門委員会<br>委員長",
        img: "https://ui-avatars.com/api/?name=Judge+3&background=FFA2A2&color=B33D3D&size=150",
        profile: "URAとしての実務経験を活かし、全国のURA向けスキルアッププログラムの企画・運営を主導。研究者の支援に必要なコミュニケーションスキルの体系化に取り組む。"
    },
    tsumura: {
        name: "津村 明子",
        title: "横浜国立大学<br>研究推進機構<br>准教授/URA",
        img: "https://ui-avatars.com/api/?name=Judge+4&background=FF7B54&color=FFF&size=150",
        profile: "大学における研究戦略立案、大型プロジェクトの企画提案・推進を担う。専門分野を越えたコミュニケーションを促進するための資料作成や可視化の手法を探求している。"
    }
};

// Modal Logic
const modal = document.getElementById('profileModal');
const modalClose = document.getElementById('modalClose');
const modalImg = document.getElementById('modalImg');
const modalName = document.getElementById('modalName');
const modalTitle = document.getElementById('modalTitle');
const modalProfile = document.getElementById('modalProfile');
const profileBtns = document.querySelectorAll('.profile-btn');

function openModal(judgeId) {
    const data = judgeProfiles[judgeId];
    if (data) {
        modalImg.src = data.img;
        modalImg.alt = data.name;
        modalName.textContent = data.name;
        modalTitle.innerHTML = data.title;
        modalProfile.innerHTML = `<p>${data.profile}</p>`;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

profileBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const judgeId = btn.getAttribute('data-judge');
        openModal(judgeId);
    });
});

modalClose.addEventListener('click', closeModal);

// Close on overlay click
modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        closeModal();
    }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});
