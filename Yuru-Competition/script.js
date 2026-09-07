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
        profile: "武蔵野美術大学基礎デザイン学科卒業。早稲田大学大学院国際情報通信研究科修了。デザインエンジニアリング系のスタートアップ創業、早稲田大学政治学研究科助手などを経て、現職。他に、厚生労働省広報室参与、年金広報構成員、総務省行政評価局アドバイザー、日本デザイン学会理事など。近年は様々な人たちによる共創を支援するための視覚的対話に取り組むほか、「<a href='https://tomita.me/visuallogue/punch/' target='_blank'>みんなが作れるポンチ絵Project</a>」を主催。"
    },
    kikuchi: {
        name: "菊地 英明",
        title: "厚生労働省<br>年金局<br>総務課長補佐",
        img: "./assets/judge_kikuchi.jpeg",
        profile: "厚生労働省に入省後、年金制度改正や事業運営に従事し、広報コンテンツ制作や<a href='https://nenkin-shisan.mhlw.go.jp/' target='_blank'>公的年金シミュレーター</a>の設計・リリースを主導。年金広報コンテンツは国連ILO（国際労働機関）の関係機関である国際社会保障協会の「ISSA Good Practice Award competition for Asia and the Pacific」において２回連続で特別優秀賞を受賞する。復興庁の「持続可能な復興広報を考える検討会議」にも携わるとともに、現在は内閣広報室および厚生労働省において広報戦略を担当する。"
    },
    tokuda: {
        name: "徳田 加奈",
        title: "RA協議会<br>スキルプログラム専門委員会<br>委員長",
        img: "./assets/judge_tokuda.jpg",
        profile: "現在は神戸大学の特命政策研究職員として、研究資金の獲得支援や研究プロジェクトマネジメントに従事。RA協議会スキルプログラム専門委員会では、URAとしての実務経験を活かし、全国のURA向けスキルアッププログラムの企画・運営を主導している。また、研究者支援・研究推進に必要なスキルの体系化にも注力。日本型URAの職能開発（プロフェッショナル化）をはじめ、人材育成・ネットワーク構築を通じて研究支援体制の発展を目指している。"
    },
    tsumura: {
        name: "津村 明子",
        title: "横浜国立大学<br>研究推進機構<br>准教授/URA",
        img: "./assets/judge_tsumura.jpg",
        profile: "研究経験を経て、現在は研究推進・経営戦略業務に従事。研究広報、研究連携、外部資金申請支援などを幅広く担う。異なる専門分野や立場をつなぐコミュニケーションに関心を持ち、研究内容や事業構想を「伝わる形」に整理する言語化・構造化・可視化の手法を実践的に探究。ポンチ絵作成にも数多く関わり、研究者の思いや構想を汲み取り、その本質や魅力を的確に整理し、説得力ある表現に仕上げる支援を行う。"
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
