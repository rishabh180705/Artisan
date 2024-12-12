// ArtisanList.js
import React from 'react';
import './List.css';

const artisans = [
  {
    name: 'Karan Singh',
    craft: 'Woodworking',
    address: '123 Artisan St, Jaipur',
    pahchanId: 'PAH003',
    mobile: '9876543210',
    image: 'https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/1.jpg',
  },
  {
    name: 'Sonia Jain',
    craft: 'Pottery',
    address: '456 Craft Ln, Delhi',
    pahchanId: 'PAH006',
    mobile: '9876543211',
    image: 'https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/2.jpg',
  },
  {
    name: 'Amit Kumar',
    craft: 'Metalwork',
    address: '789 Workshop Rd, Mumbai',
    pahchanId: 'PAH009',
    mobile: '9876543212',
    image: 'https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/3.jpg',
  },
  {
    name: 'Priya Verma',
    craft: 'Textile Weaving',
    address: '101 Fabric Ln, Surat',
    pahchanId: 'PAH012',
    mobile: '9876543213',
    image: 'https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/5.jpg',
  },
  {
    name: 'Ramesh Gupta',
    craft: 'Jewelry Making',
    address: '202 Gems St, Hyderabad',
    pahchanId: 'PAH015',
    mobile: '9876543214',
    image: 'https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/4.jpg',
  },
  {
    name: 'Anita Desai',
    craft: 'Painting',
    address: '303 Colors Blvd, Pune',
    pahchanId: 'PAH018',
    mobile: '9876543215',
    image: 'https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/8.jpg',
  },
  {
    name: 'Vikram Rathore',
    craft: 'Leatherwork',
    address: '404 Leather Ln, Kanpur',
    pahchanId: 'PAH021',
    mobile: '9876543216',
    image: 'https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/6.jpg',
  },
  {
    name: 'Neha khan',
    craft: 'Embroidery',
    address: '505 Stitch Rd, Agra',
    pahchanId: 'PAH024',
    mobile: '9876543217',
    image: 'https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/7.jpg',
  },
  {
    name: 'Rajesh Pillai',
    craft: 'Handmade Toys',
    address: '606 Play Blvd, Coimbatore',
    pahchanId: 'PAH027',
    mobile: '9876543218',
    image: 'https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/9.jpg',
  },
  {
    name: 'Meera Nair',
    craft: 'Ceramics',
    address: '707 Pottery Ln, Kochi',
    pahchanId: 'PAH030',
    mobile: '9876543219',
    image: 'https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/10.jpg',
  },
  {
    name: 'Arun Bhatt',
    craft: 'Sculpting',
    address: '808 Artisans St, Udaipur',
    pahchanId: 'PAH033',
    mobile: '9876543220',
    image: 'https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/13.jpg',
  },
  {
    name: 'Geeta Pandey',
    craft: 'Knitting',
    address: '909 Yarn Ave, Lucknow',
    pahchanId: 'PAH036',
    mobile: '9876543221',
    image: 'https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/12.jpg',
  },
  {
    name: 'Suresh Patil',
    craft: 'Bamboo Crafts',
    address: '1010 Bamboo St, Guwahati',
    pahchanId: 'PAH039',
    mobile: '9876543222',
    image: 'https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/22.jpg',
  },
  {
    name: 'Lakshmi Iyer',
    craft: 'Terracotta',
    address: '1111 Clay Rd, Chennai',
    pahchanId: 'PAH042',
    mobile: '9876543223',
    image: 'https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/14.jpg',
  },
  {
    name: 'Mohammed Rizwan',
    craft: 'Calligraphy',
    address: '1212 Script Ln, Bangalore',
    pahchanId: 'PAH045',
    mobile: '9876543224',
    image: 'https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/19.jpg',
  },
];

function ArtisanList() {
  return (
    <div className="artisan-list-container">
      <h1>Our Artisans</h1>
      <div className="artisan-cards">
        {artisans.map((artisan, index) => (
          <div key={index} className="artisan-card">
            <img src={artisan.image} alt={artisan.name} className="artisan-image" />
            <div className="artisan-info">
              <h2>{artisan.name}</h2>
              <p><strong>Craft:</strong> {artisan.craft}</p>
              <p><strong>Address:</strong> {artisan.address}</p>
              <p><strong>Pahchan ID:</strong> {artisan.pahchanId}</p>
              <p><strong>Mobile:</strong> {artisan.mobile}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtisanList;
