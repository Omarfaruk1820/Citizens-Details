import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

// Demo Data (replace with API later)
const categories = [
  {
    id: 1,
    name: "Men's T-Shirts",
    slug: "mens-tshirts",
    image:
      "https://i.ibb.co.com/fGQg1wdy/brando-makes-branding-7-WE1-Lb-Sc4z-M-unsplash.jpg",
  },
  {
    id: 2,
    name: "Men's Shirts",
    slug: "mens-shirts",
    image:
      "https://i.ibb.co.com/PZwnmzM7/waldemar-brandt-Db4d6-MRIXJc-unsplash.jpg",
  },
  {
    id: 3,
    name: "Men's Jeans",
    slug: "mens-jeans",
    image:
      "https://i.ibb.co.com/JWJS38rr/zakaria-issaad-Tcd-LW7hi3-G4-unsplash.jpg",
  },
  {
    id: 4,
    name: "Men's Pants",
    slug: "mens-pants",
    image:
      "https://i.ibb.co.com/7dBn1khc/waldemar-brandt-UP9-Dt-Tj-RYp-I-unsplash.jpg",
  },
  {
    id: 5,
    name: "Men's Panjabi",
    slug: "mens-panjabi",
    image:
      "https://i.ibb.co.com/hp4008R/pngtree-men-panjabi-formal-wear-transparent-clip-art-for-passport-photo-psd-png-image-4547232.png",
  },
  {
    id: 6,
    name: "Men's Blazers",
    slug: "mens-blazers",
    image:
      "https://i.ibb.co.com/cSSfqnW4/benjamin-r-IIp-Y8-NZYe-Ag-unsplash.jpg",
  },
  {
    id: 7,
    name: "Women's Saree",
    slug: "womens-saree",
    image: "https://i.ibb.co.com/rvMy6jv/50674905277-697c2f5795-k.jpg",
  },
  {
    id: 8,
    name: "Women's Salwar Kameez",
    slug: "womens-salwar-kameez",
    image: "https://i.ibb.co.com/Y0Yz059/image-long-webp-10.webp",
  },
  {
    id: 9,
    name: "Women's Kurti",
    slug: "womens-kurti",
    image: "https://i.ibb.co.com/BzYZXmh/image-long-webp.webp",
  },
  {
    id: 10,
    name: "Women's Tops",
    slug: "womens-tops",
    image:
      "https://i.ibb.co.com/FbdmnxW/digital-printed-cotton-co-ord-set-in-peach-v1-tfg11-1.webp",
  },
  {
    id: 11,
    name: "Women's Jeans",
    slug: "womens-jeans",
    image:
      "https://i.ibb.co.com/7dBn1khc/waldemar-brandt-UP9-Dt-Tj-RYp-I-unsplash.jpg",
  },
  {
    id: 12,
    name: "Women's Dresses",
    slug: "womens-dresses",
    image:
      "https://i.ibb.co.com/qCDGctR/printed-crepe-silk-crop-top-set-in-mustard-v1-tch356-1.webp",
  },
  {
    id: 13,
    name: "Women's Hijab",
    slug: "womens-hijab",
    image:
      "https://i.ibb.co.com/5XdCdswh/hasan-almasi-X2-UAm-Icpko-unsplash.jpg",
  },
  {
    id: 14,
    name: "Kids Boys T-Shirts",
    slug: "kids-boys-tshirts",
    image:
      "https://i.ibb.co.com/9mnP81cj/hessam-nabavi-6yuj-J85-E2-AQ-unsplash.jpg",
  },
  {
    id: 15,
    name: "Kids Boys Pants",
    slug: "kids-boys-pants",
    image:
      "https://i.ibb.co.com/3msmF93W/ae2e28f2c569f38edc51ec4221305ad7.webp",
  },
  {
    id: 16,
    name: "Kids Boys Panjabi",
    slug: "kids-boys-panjabi",
    image:
      "https://i.ibb.co.com/Xf6zWzzr/e74a7938-3213-4cc4-944b-54f9cc7d7f70-600x722.webp",
  },
  {
    id: 17,
    name: "Kids Girls Dresses",
    slug: "kids-girls-dresses",
    image: "https://i.ibb.co.com/Qjc2LtgW/DSC1569.webp",
  },
  {
    id: 18,
    name: "Kids Girls Frocks",
    slug: "kids-girls-frocks",
    image: "https://i.ibb.co.com/tpvR2hKP/0d4f581cce679f073828e47112ea7cfd.jpg",
  },
  {
    id: 19,
    name: "Kids Girls Tops",
    slug: "kids-girls-tops",
    image: "https://i.ibb.co.com/9mJ3XNZ7/ecafef7cdde66cf56e132967ba67bd1d.jpg",
  },

  {
    id: 20,
    name: "Baby Clothing",
    slug: "baby-clothing",
    image:
      "https://i.ibb.co.com/HftGSn4p/mediamodifier-Vo-Xqvb-LAPj-M-unsplash.jpg",
  },
  {
    id: 21,
    name: "Winter Jackets",
    slug: "winter-jackets",
    image: "https://i.ibb.co.com/8ShjLDj/images.webp",
  },
  {
    id: 22,
    name: "Hoodies & Sweatshirts",
    slug: "hoodies-sweatshirts",
    image:
      "https://i.ibb.co.com/Zp8DmfdL/redicul-pict-T-8gjuk1-Weo-unsplash.jpg",
  },
  {
    id: 23,
    name: "Sportswear",
    slug: "sportswear",
    image:
      "https://i.ibb.co.com/rK911KYs/zakaria-issaad-i3-X-Kj4b-IM4-unsplash.jpg",
  },
  {
    id: 24,
    name: "Formal Wear",
    slug: "formal-wear",
    image: "https://i.ibb.co.com/DZ0fTbx/pexels-llucams-2767159.jpg",
  },
  {
    id: 25,
    name: "Casual Wear",
    slug: "casual-wear",
    image:
      "https://i.ibb.co.com/4R5yf7tp/a-man-s-outfit-laid-out-on-a-white-background-photo.jpg",
  },
  {
    id: 26,
    name: "Ethnic Wear",
    slug: "ethnic-wear",
    image:
      "https://i.ibb.co.com/355VHh8D/happy-indian-woman-yellow-ethnic-wear-636346-1373.avif",
  },
  {
    id: 27,
    name: "Party Wear",
    slug: "party-wear",
    image:
      "https://i.ibb.co.com/DPNzsZ1k/party-holidays-concept-three-glamour-women-luxury-glitter-sequins-dress-having-fun-three-glamorous-w.webp",
  },
  {
    id: 28,
    name: "Underwear & Innerwear",
    slug: "innerwear",
    image:
      "https://i.ibb.co.com/hJsDPMzs/photo-1568441556126-f36ae0900180.avif",
  },
  {
    id: 29,
    name: "Sleepwear",
    slug: "sleepwear",
    image: "https://i.ibb.co.com/QvFB73PB/pexels-photo-13111273.jpg",
  },
  {
    id: 30,
    name: "Accessories",
    slug: "accessories",
    image: "https://source.unsplash.com/400x400/?fashion,accessories",
  },
  {
    id: 31,
    name: "Longgi",
    slug: "longgi",
    image:
      "https://i.ibb.co.com/WvdBr7yV/top-view-travel-accessories-with-shoes-map-smartphone-with-mockup-screen-hat-tourist-essentials-phot.jpg",
  },
  {
    id: 32,
    name: "Ghamcha",
    slug: "ghamcha",
    image:
      "https://i.ibb.co.com/mCtJ1tsH/colorful-traditional-gamcha-cotton-cloths-displayed-sale-vibrant-display-thin-known-as-hanging-verti.webp",
  },
];

const FeaturedCategories = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Featured Categories
        </h2>
        <p className="mt-4 text-gray-500 text-sm md:text-base">
          Discover our most popular shopping categories. Explore trending
          styles, latest collections, and top-quality products curated just for
          you.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-8 gap-2">
        {categories.map((category) => (
          <Link
            to={`/category/${category.slug}`}
            key={category.id}
            className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            {/* IMAGE */}
            <div className="h-40 md:h-40 overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            {/* CONTENT */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <h3 className="text-white  text-lg">{category.name}</h3>

              <span className="bg-white text-black p-2 rounded-full text-xs group-hover:bg-primary group-hover:text-white transition">
                <FaArrowRight />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
