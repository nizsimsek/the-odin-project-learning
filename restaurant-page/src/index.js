const content = document.getElementById("content");

init();

function init() {
    getHomePage();
}

function getHomePage() {
    content.innerHTML = "";
    const sliderDiv = document.createElement("div");
    sliderDiv.className = "slider";
    const sliderImg = document.createElement("img");
    sliderImg.src = "../images/slider.png";
    sliderImg.alt = "Yalı Restaurant";
    sliderDiv.appendChild(sliderImg);
    content.appendChild(sliderDiv);
}

function getAboutPage() {
    content.innerHTML = "";
    const aboutDiv = document.createElement("div");
    aboutDiv.className = "about";
    const aboutHeader = document.createElement("h2");
    aboutHeader.innerText = "Restaurant Hakkında";
    const aboutParagraph = document.createElement("p");
    aboutParagraph.innerText = "Canım et yemek istiyor dediğinizde, saniyeler içinde yüzlerce restorana " +
        "ulaşabilirsiniz. Etim hem lezzetli, hem taze, hem de doğal olsun derseniz, seçenekleriniz bir elin parmaklarını" +
        " geçmez. Fakat etim hem doğal ve lezzetli olsun, hem de usta aşçılar tarafından pişirilsin; üstelik şehrin " +
        "gürültüsünden uzak bir ortamda, orman içinde, kuş sesleri arasında servis edilsin derseniz, o zaman geriye " +
        "tek bir seçeneğiniz kalır: “Yalı Restaurant!” Yalı Restaurant’da et yemek, sıra dışı bir deneyimdir. Etlerin " +
        "doğal ortamda yetişmiş, genç ve sağlıklı hayvanlardan elde edilmesine özen gösterilir. Et pişirmeyi ‘sanat’ " +
        "olarak gören ızgara ustalarımız etin en körpe, en taze kısımlarını sizler için özel olarak pişirip servis" +
        " ederler. Et pişirmenin tüm aşamalarında gösterdiğimiz saygı ve özen, etlerimizin nefis lezzetinde kendisini " +
        "gösterir. Restoran binamız, klasik Türk mimarisinden esinlenen çizgileri ve özenli iç tasarımıyla sizi adeta " +
        "geçmişe uzanan bir yolculuğa çıkarır. 750 metre karelik geniş iç hacmi, 7 metreyi bulan yüksek tavanlarıyla " +
        "eşine az rastlanan bir ferahlık ve konfor sunar. Ağaçlarla çevrili 12 bin metre karelik arazimiz, Çerkezköy’ün" +
        " muhteşem tabiatıyla iç içedir. Çocuklarınız için hazırlanan oyun parkı, şirin hayvanlara ev sahipliği yapan " +
        "hayvanat bahçesi, akarsuyun ferahlığını ayağınıza getiren yapay şelaleler ve birbirine mesafeli olarak " +
        "yerleştirilen bahçe masaları, arazimizi ailenizle vakit geçirebileceğiniz ideal bir alan haline getirir. " +
        "Yalı Restaurant, sahip olduğu geniş alan sayesinde büyük organizasyonlar, etkinlikler ve iş toplantıları " +
        "için de ideal niteliktedir. Ulaşılması kolay ve merkezi bir noktada yer alan Yalı Restaurant, İstanbul" +
        " Mahmutbey Gişeleri’ne 50 dakika, Edirne’ye 1 saat mesafededir. Doğanın lezzetini doğanın kalbinde tatmak" +
        " için, sizleri Yalı Restaurant’a davet ediyoruz!";
    aboutDiv.appendChild(aboutHeader);
    aboutDiv.appendChild(aboutParagraph);
    content.appendChild(aboutDiv);
}

function getMenuPage() {
    content.innerHTML = "";
    const menuDiv = document.createElement("div");
    menuDiv.className = "menu";
    const menuImg = document.createElement("img");
    menuImg.src = "../images/menu.jpg";
    menuImg.alt = "Menu";
    menuDiv.appendChild(menuImg);
    content.appendChild(menuDiv);
}

function getContactPage() {
    content.innerHTML = "";
    const contactDiv = document.createElement("div");
    contactDiv.className = "contact";
    const contactHeader = document.createElement("h2");
    contactHeader.innerText = "İletişim";
    const contactParagraph = document.createElement("p");
    contactParagraph.innerText = "Yalı Restaurant’a aşağıda verilen bilgilerle rezervasyon yapabilir ve bizi ziyaret" +
        " edebilirsiniz. \n Herhangi bir soru veya öneriniz varsa bize yazmaktan ve bizi aramaktan çekinmeyin." +
        "Görüş ve önerilerinizi her zaman dikkate alıyoruz."
    const contactPhone = document.createElement("p");
    contactPhone.innerHTML = `<a href="tel:+90542-375-9356"><i class="fas fa-phone"></i> +90 542 375 93 56</a>`;
    const contactMail = document.createElement("p");
    contactMail.innerHTML = `<a href="mailto:nizsimsek@gmail.com"><i class="fas fa-at"></i> nizsimsek@gmail.com</a>`;
    const contactAddress = document.createElement("p");
    contactAddress.innerHTML = `<i class="fas fa-map-marked-alt"></i> Ahmet Mahallesi Tacir Caddesi No:20`;
    contactDiv.appendChild(contactHeader);
    contactDiv.appendChild(contactParagraph);
    contactDiv.appendChild(contactPhone);
    contactDiv.appendChild(contactMail);
    contactDiv.appendChild(contactAddress);
    content.appendChild(contactDiv);
}