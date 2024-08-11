import admissionSchema from '../models/admissionModel.js';

export const admissionForm = async (req, res) => {
  const { fullName, email, cnic, dob, address, lastQualification, fatherName, phone, fatherCnic, gender } = req.body;
  // return console.log(req.body)
  try {
    // Hash the password

    // Create new user
    const newUser = new admissionSchema({
      fullName,
      email,
      cnic,
      dob,
      address,
      lastQualification,
      fatherName,
      phone,
      fatherCnic,
      gender
    });

    // Save the user
    const  save  = await newUser.save();


    res.status(201).json({ user: save });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateAdmissionForm = async (req, res) => {
  const { fullName, email, cnic, dob, address, lastQualification, hasLaptop , fatherName, phone, fatherCnic, gender } = req.body;

  try {
    // Find and update user
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      {
        fullName,
        email,
        cnic,
        dob,
        address,
        lastQualification,
        hasLaptop,
        fatherName,
        phone,
        fatherCnic,
        gender
      },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};




