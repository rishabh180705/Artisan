import { useState } from "react";
import "./Profile.css";

const ProfilePage = () => {
  const [artisanDetails, setArtisanDetails] = useState({
    name: "Ramesh Kumar",
    craft: "Woodworking",
    address: "123 Artisan Street, Jaipur, Rajasthan",
    phone: "9876543210",
    pehchanId: "PK12345XYZ",
    story: `Ramesh, a gifted artisan from a quiet village, mastered woodworking from a young age. His hands turned ordinary logs into mesmerizing art—delicate carvings, ornate furniture, and sculptures that seemed alive. Known for his leaf motif symbolizing renewal, his work attracted admirers far and wide.

Despite fame, Ramesh remained loyal to his roots, teaching young artisans his philosophy: "Respect the wood, and it will speak to you." Through his craft and mentorship, Ramesh transformed his village into a thriving hub of artistry, proving that true art doesn’t just build objects; it nurtures communities and lives on through shared wisdom.`,
    image: "https://tsdevil.fun/CG_Project1/raws/artisan-sample-imgs/22.jpg", // Profile image (initially null)
  });

  const [isEditingImage, setIsEditingImage] = useState(false); // Toggle image edit mode

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setArtisanDetails((prev) => ({ ...prev, image: reader.result }));
        setIsEditingImage(false);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-page">
      <h1>Artisan Profile</h1>

      {/* Profile Image Section */}
      <div className="profile-image-section">
        <h2>Profile Image</h2>
        {artisanDetails.image ? (
          <img src={artisanDetails.image} alt="Artisan" className="profile-img" />
        ) : (
          <p>No image uploaded</p>
        )}
        {isEditingImage ? (
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        ) : (
          <button onClick={() => setIsEditingImage(true)} className="edit-btn">
            {artisanDetails.image ? "Change Image" : "Add Image"}
          </button>
        )}
      </div>

      {/* Artisan Details */}
      <div className="profile-details">
        <h2>Details</h2>
        <div className="profile-row">
          <label>Name:</label>
          <p>{artisanDetails.name}</p>
        </div>
        <div className="profile-row">
          <label>Craft:</label>
          <p>{artisanDetails.craft}</p>
        </div>
        <div className="profile-row">
          <label>Address:</label>
          <p>{artisanDetails.address}</p>
        </div>
        <div className="profile-row">
          <label>Phone Number:</label>
          <p>{artisanDetails.phone}</p>
        </div>
        <div className="profile-row">
          <label>Pehchan ID:</label>
          <p>{artisanDetails.pehchanId}</p>
        </div>
      </div>

      {/* Story Section */}
      <div className="profile-story">
        <h2>Story</h2>
        <p style={{ whiteSpace: "pre-wrap" }}>
          {artisanDetails.story || "No story available"}
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;



