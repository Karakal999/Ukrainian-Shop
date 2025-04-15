interface AboutTranslation {
  title: string;
  mission: {
    title: string;
    description: string;
  };
  story: {
    title: string;
    description: string;
  };
  values: {
    title: string;
    tradition: {
      title: string;
      description: string;
    };
    quality: {
      title: string;
      description: string;
    };
    sustainability: {
      title: string;
      description: string;
    };
  };
  team: {
    title: string;
    description: string;
  };
}

export const about: { en: AboutTranslation; uk: AboutTranslation } = {
  en: {
    title: "About Us",
    mission: {
      title: "Our Mission",
      description:
        "To preserve and promote Ukrainian cultural heritage through authentic traditional clothing, while making it accessible to people worldwide. We blend time-honored craftsmanship with modern aesthetics to create pieces that tell the story of Ukraine's rich cultural tapestry.",
    },
    story: {
      title: "Our Story",
      description:
        "Founded with a passion for Ukrainian culture and tradition, our journey began with a simple idea: to share the beauty of Ukrainian traditional clothing with the world. Each piece in our collection is carefully crafted by skilled artisans who have inherited generations of traditional techniques.",
    },
    values: {
      title: "Our Values",
      tradition: {
        title: "Tradition",
        description:
          "We honor centuries-old Ukrainian craftsmanship and designs, ensuring each piece authentically represents our cultural heritage.",
      },
      quality: {
        title: "Quality",
        description:
          "Every garment is meticulously crafted using premium materials and traditional techniques to ensure lasting beauty and durability.",
      },
      sustainability: {
        title: "Sustainability",
        description:
          "We are committed to ethical production practices and supporting local artisan communities throughout Ukraine.",
      },
    },
    team: {
      title: "Our Team",
      description:
        "Our team consists of passionate individuals dedicated to preserving and promoting Ukrainian culture. From our skilled artisans to our customer service representatives, everyone plays a vital role in bringing traditional Ukrainian fashion to you.",
    },
  },
  uk: {
    title: "Про Нас",
    mission: {
      title: "Наша Місія",
      description:
        "Зберігати та популяризувати українську культурну спадщину через автентичний традиційний одяг, роблячи його доступним для людей у всьому світі. Ми поєднуємо перевірену часом майстерність із сучасною естетикою, створюючи речі, які розповідають історію багатої культурної спадщини України.",
    },
    story: {
      title: "Наша Історія",
      description:
        "Заснований на любові до української культури та традицій, наш шлях розпочався з простої ідеї: поділитися красою українського традиційного одягу зі світом. Кожна річ у нашій колекції ретельно виготовлена майстрами, які успадкували багатовікові традиційні техніки.",
    },
    values: {
      title: "Наші Цінності",
      tradition: {
        title: "Традиції",
        description:
          "Ми шануємо багатовікове українське ремесло та дизайн, гарантуючи, що кожна річ автентично представляє нашу культурну спадщину.",
      },
      quality: {
        title: "Якість",
        description:
          "Кожен виріб ретельно виготовлений з використанням преміальних матеріалів та традиційних технік для забезпечення довговічної краси та міцності.",
      },
      sustainability: {
        title: "Сталий розвиток",
        description:
          "Ми віддані етичним практикам виробництва та підтримці місцевих спільнот майстрів по всій Україні.",
      },
    },
    team: {
      title: "Наша Команда",
      description:
        "Наша команда складається з захоплених людей, відданих збереженню та популяризації української культури. Від наших майстрів до представників служби підтримки клієнтів - кожен відіграє важливу роль у наближенні традиційної української моди до вас.",
    },
  },
};
