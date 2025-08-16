import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Email configuration
const createTransporter = () => {
  // You can configure different email services here
  return nodemailer.createTransporter({
    // For Gmail (recommended for production)
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER, // Your email
      pass: process.env.SMTP_PASSWORD, // Your app password
    },
    // Alternatively, use custom SMTP settings
    // host: process.env.SMTP_HOST,
    // port: process.env.SMTP_PORT,
    // secure: process.env.SMTP_SECURE === 'true',
    // auth: {
    //   user: process.env.SMTP_USER,
    //   pass: process.env.SMTP_PASSWORD,
    // },
  });
};

// Localized content for email templates
const getLocalizedContent = (language = "en") => {
  const content = {
    en: {
      emailSubject: "New Contact Form Submission - SmartLibrary",
      newInquiry: "SmartLibrary - New Contact Inquiry",
      submissionDetails: "Contact Form Submission Details",
      libraryOrganization: "Library/Organization:",
      emailAddress: "Email Address:",
      phoneNumber: "Phone Number:",
      rfidRequirements: "RFID Requirements:",
      message: "Message:",
      inquirySource: "Inquiry Source:",
      submissionTime: "Submission Time:",
      leadingProvider:
        "Leading provider of innovative library technology solutions worldwide",
      autoReplySubject: "Thank you for contacting SmartLibrary",
      thankYou: "Thank you for your inquiry!",
      dearCustomer: "Dear",
      thankYouMessage:
        "Thank you for contacting SmartLibrary regarding your RFID technology needs. We have received your inquiry and our team will review your requirements carefully.",
      submissionSummary: "Your Submission Summary:",
      whatsNext: "What's Next?",
      reviewTime:
        "Our RFID specialists will review your requirements within 24 hours",
      proposalTime:
        "You'll receive a detailed consultation proposal within 48 hours",
      demonstration:
        "We'll schedule a demonstration of our RFID solutions if needed",
      needAssistance: "Need Immediate Assistance?",
      phone: "Phone:",
      email: "Email:",
      address: "Address:",
      officialPartner:
        "As the official partner of Bibliotheca in Central Asia, we're committed to providing world-class library RFID solutions and professional support.",
      bestRegards: "Best regards,",
      teamName: "SmartLibrary Team",
      footerTagline:
        "SmartLibrary - Leading RFID Solutions for Modern Libraries",
      officialPartnerFooter: "Official Partner of Bibliotheca | Central Asia",
    },
    ru: {
      emailSubject: "Новое обращение через форму контактов - SmartLibrary",
      newInquiry: "SmartLibrary - Новое обращение клиента",
      submissionDetails: "Детали обращения через форму контактов",
      libraryOrganization: "Библиотека/Организация:",
      emailAddress: "Адрес электронной почты:",
      phoneNumber: "Номер телефона:",
      rfidRequirements: "Требования к RFID:",
      message: "Сообщение:",
      inquirySource: "Источник запроса:",
      submissionTime: "Время отправки:",
      leadingProvider:
        "Ведущий поставщик инновационных технологических решений для библиотек по всему миру",
      autoReplySubject: "Спасибо за обращение в SmartLibrary",
      thankYou: "Спасибо за ваш запрос!",
      dearCustomer: "Уважаемый(ая)",
      thankYouMessage:
        "Благодарим вас за обращение в SmartLibrary по вопросам RFID технологий. Мы получили ваш запрос, и наша команда внимательно изучит ваши требования.",
      submissionSummary: "Сводка вашего обращения:",
      whatsNext: "Что дальше?",
      reviewTime:
        "Наши специалисты по RFID изучат ваши требования в течение 24 часов",
      proposalTime:
        "Вы получите детальное предложение по консультации в течение 48 часов",
      demonstration:
        "При необходимости мы запланируем демонстрацию наших RFID решений",
      needAssistance: "Нужна срочная помощь?",
      phone: "Телефон:",
      email: "Эл. почта:",
      address: "Адрес:",
      officialPartner:
        "Как официальный партнер Bibliotheca в Центральной Азии, мы стремимся предоставлять первоклассные библиотечные RFID решения и профессиональную поддержку.",
      bestRegards: "С наилучшими пожеланиями,",
      teamName: "Команда SmartLibrary",
      footerTagline:
        "SmartLibrary - Ведущие RFID решения для современных библиотек",
      officialPartnerFooter:
        "Официальный партнер Bibliotheca | Центральная Азия",
    },
    uz: {
      emailSubject: "Yangi aloqa shakli orqali murojaat - SmartLibrary",
      newInquiry: "SmartLibrary - Yangi mijoz murojaati",
      submissionDetails: "Aloqa shakli orqali murojaat tafsilotlari",
      libraryOrganization: "Kutubxona/Tashkilot:",
      emailAddress: "Elektron pochta manzili:",
      phoneNumber: "Telefon raqami:",
      rfidRequirements: "RFID talablari:",
      message: "Xabar:",
      inquirySource: "So'rov manbai:",
      submissionTime: "Yuborilgan vaqt:",
      leadingProvider:
        "Butun dunyo bo'ylab innovatsion kutubxona texnologiya yechimlari yetakchi ta'minotchisi",
      autoReplySubject: "SmartLibrary ga murojaat qilganingiz uchun rahmat",
      thankYou: "So'rovingiz uchun rahmat!",
      dearCustomer: "Hurmatli",
      thankYouMessage:
        "RFID texnologiyalari bo'yicha SmartLibrary ga murojaat qilganingiz uchun rahmat. Biz sizning so'rovingizni oldik va jamoamiz sizning talablaringizni diqqat bilan ko'rib chiqadi.",
      submissionSummary: "Sizning murojaatingiz xulosasi:",
      whatsNext: "Keyingi qadamlar:",
      reviewTime:
        "Bizning RFID mutaxassislarimiz 24 soat ichida sizning talablaringizni ko'rib chiqadilar",
      proposalTime: "48 soat ichida batafsil maslahat taklifini olasiz",
      demonstration:
        "Agar kerak bo'lsa, RFID yechimlarimizning namoyishini rejalashtiraramiz",
      needAssistance: "Zudlik bilan yordam kerakmi?",
      phone: "Telefon:",
      email: "Elektron pochta:",
      address: "Manzil:",
      officialPartner:
        "Markaziy Osiyodagi Bibliotheca ning rasmiy hamkori sifatida, biz jahon darajasidagi kutubxona RFID yechimlari va professional yordamni taqdim etishga sodiqmiz.",
      bestRegards: "Hurmat bilan,",
      teamName: "SmartLibrary jamoasi",
      footerTagline:
        "SmartLibrary - Zamonaviy kutubxonalar uchun etakchi RFID yechimlari",
      officialPartnerFooter: "Bibliotheca rasmiy hamkori | Markaziy Osiyo",
    },
  };

  return content[language] || content.en;
};

// Email template
const createEmailTemplate = (data, selectedCountry, language = "en") => {
  const loc = getLocalizedContent(language);
  const countryInfo =
    selectedCountry === "uzbekistan"
      ? {
          country: "Uzbekistan",
          office: "Tashkent Office",
          phone: "+998 71 200 70 09",
          email: "info@smartlibrary.uz",
        }
      : {
          country: "Kazakhstan",
          office: "Almaty Office",
          phone: "+7 727 300 40 40",
          email: "info@smartlibrary.kz",
        };

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>${loc.emailSubject}</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background: #0066cc; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .info-block { background: white; padding: 15px; margin: 10px 0; border-left: 4px solid #0066cc; }
        .footer { background: #333; color: white; padding: 15px; text-align: center; font-size: 12px; }
        .label { font-weight: bold; color: #0066cc; }
        .value { margin-left: 10px; }
        .country-badge { background: #0066cc; color: white; padding: 5px 10px; border-radius: 15px; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🏢 ${loc.newInquiry}</h1>
        <span class="country-badge">${countryInfo.office}</span>
      </div>
      
      <div class="content">
        <h2>📨 ${loc.submissionDetails}</h2>
        
        <div class="info-block">
          <div><span class="label">🏛️ ${
            loc.libraryOrganization
          }</span><span class="value">${data.name}</span></div>
        </div>
        
        <div class="info-block">
          <div><span class="label">📧 ${
            loc.emailAddress
          }</span><span class="value">${data.email}</span></div>
        </div>
        
        <div class="info-block">
          <div><span class="label">📞 ${
            loc.phoneNumber
          }</span><span class="value">${data.phone}</span></div>
        </div>
        
        ${
          data.subject
            ? `
        <div class="info-block">
          <div><span class="label">🎯 ${loc.rfidRequirements}</span><span class="value">${data.subject}</span></div>
        </div>
        `
            : ""
        }
        
        <div class="info-block">
          <div><span class="label">💬 ${loc.message}</span></div>
          <div style="margin-top: 10px; padding: 15px; background: #f0f8ff; border-radius: 5px;">
            ${data.message.replace(/\n/g, "<br>")}
          </div>
        </div>
        
        <div class="info-block">
          <div><span class="label">🌍 ${
            loc.inquirySource
          }</span><span class="value">${countryInfo.country} (${
    countryInfo.office
  })</span></div>
          <div><span class="label">📅 ${
            loc.submissionTime
          }</span><span class="value">${new Date().toLocaleString()}</span></div>
        </div>
      </div>
      
      <div class="footer">
        <p><strong>SmartLibrary RFID Solutions</strong></p>
        <p>${countryInfo.office} | ${countryInfo.phone} | ${
    countryInfo.email
  }</p>
        <p>${loc.leadingProvider}</p>
      </div>
    </body>
    </html>
  `;
};

// Auto-reply template
const createAutoReplyTemplate = (data, selectedCountry, language = "en") => {
  const loc = getLocalizedContent(language);
  const countryInfo =
    selectedCountry === "uzbekistan"
      ? {
          country: "Uzbekistan",
          office: "Tashkent Office",
          phone: "+998 71 200 70 09",
          email: "info@smartlibrary.uz",
          address: "Tashkent, Uzbekistan, Mirzo Ulugbek District, 100125",
        }
      : {
          country: "Kazakhstan",
          office: "Almaty Office",
          phone: "+7 727 300 40 40",
          email: "info@smartlibrary.kz",
          address:
            "Almaty, Kazakhstan, Bostandyk District, Al-Farabi Avenue, 050040",
        };

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>${loc.autoReplySubject}</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background: #0066cc; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .highlight { background: #f0f8ff; padding: 15px; border-radius: 5px; margin: 15px 0; }
        .contact-info { background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 15px 0; }
        .footer { background: #333; color: white; padding: 15px; text-align: center; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🏢 SmartLibrary RFID Solutions</h1>
        <p>${loc.thankYou}</p>
      </div>
      
      <div class="content">
        <h2>${loc.dearCustomer} ${data.name.split(" ")[0]},</h2>
        
        <p>${loc.thankYouMessage}</p>
        
        <div class="highlight">
          <h3>📋 ${loc.submissionSummary}</h3>
          <ul>
            <li><strong>${loc.libraryOrganization}</strong> ${data.name}</li>
            <li><strong>${loc.emailAddress}</strong> ${data.email}</li>
            <li><strong>${loc.phone}</strong> ${data.phone}</li>
            ${
              data.subject
                ? `<li><strong>${loc.rfidRequirements}</strong> ${data.subject}</li>`
                : ""
            }
                : ""
            }
            <li><strong>Inquiry Office:</strong> ${countryInfo.office}</li>
          </ul>
        </div>
        
        <h3>⏰ ${loc.whatsNext}</h3>
        <ul>
          <li>${loc.reviewTime}</li>
          <li>${loc.proposalTime}</li>
          <li>${loc.demonstration}</li>
        </ul>
        
        <div class="contact-info">
          <h3>📞 ${loc.needAssistance}</h3>
          <p><strong>${countryInfo.office}</strong></p>
          <p>📞 ${loc.phone} ${countryInfo.phone}</p>
          <p>📧 ${loc.email} ${countryInfo.email}</p>
          <p>📍 ${loc.address} ${countryInfo.address}</p>
        </div>
        
        <p>${loc.officialPartner}</p>
        
        <p>${loc.bestRegards}<br>
        <strong>${loc.teamName}</strong><br>
        ${countryInfo.office}</p>
      </div>
      
      <div class="footer">
        <p><strong>${loc.footerTagline}</strong></p>
        <p>${loc.officialPartnerFooter}</p>
      </div>
    </body>
    </html>
  `;
};

export async function POST(request) {
  try {
    const {
      formData,
      selectedCountry = "uzbekistan",
      language = "en",
    } = await request.json();

    // Validate required fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      return NextResponse.json(
        { success: false, message: "All required fields must be filled" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = createTransporter();

    // Determine recipient email based on selected country
    const recipientEmail =
      selectedCountry === "uzbekistan"
        ? process.env.CONTACT_EMAIL_UZ || "info@smartlibrary.uz"
        : process.env.CONTACT_EMAIL_KZ || "info@smartlibrary.kz";

    // Get localized content for email subjects
    const loc = getLocalizedContent(language);

    // Email to company
    const companyMailOptions = {
      from: `"SmartLibrary Contact Form" <${process.env.SMTP_USER}>`,
      to: recipientEmail,
      cc: process.env.ADMIN_EMAIL, // Optional admin email
      subject: `🏛️ ${loc.emailSubject} - ${
        formData.name
      } (${selectedCountry.toUpperCase()})`,
      html: createEmailTemplate(formData, selectedCountry, language),
      replyTo: formData.email,
    };

    // Auto-reply to customer
    const autoReplyOptions = {
      from: `"SmartLibrary" <${process.env.SMTP_USER}>`,
      to: formData.email,
      subject: `${loc.autoReplySubject} - ${
        selectedCountry === "uzbekistan" ? "Tashkent" : "Almaty"
      } Office`,
      html: createAutoReplyTemplate(formData, selectedCountry, language),
    };

    // Send emails
    await Promise.all([
      transporter.sendMail(companyMailOptions),
      transporter.sendMail(autoReplyOptions),
    ]);

    return NextResponse.json({
      success: true,
      message:
        "Your message has been sent successfully! We will get back to you soon.",
    });
  } catch (error) {
    console.error("Email sending error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Sorry, there was an error sending your message. Please try again later or contact us directly.",
        error:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
