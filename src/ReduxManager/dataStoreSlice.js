import { createSlice } from '@reduxjs/toolkit';

export const dataStoreSlice = createSlice({
  name: 'dataStore',
  initialState: {
    personalInfo: {
      firstName: "Arjun",
      lastName: "Prakash Mani",
      Email: "arjun.prakash@gmail.com",
      Mobile: "+91 8189966699",
      Address: "Selvapuram",
      City: "Tiruppur",
      State: "Tamil Nadu",
      Pin: "614607",
      Objective: "Take a Tour of our Full Stack Web Devloper to learn about curriculam, assesements and projects designed to help you build a career in Web Devlopment."
      
    },
    workEx: [
      {
        title: "",
        orgName: "",
        startYear: "",
        endYear: "",
      
      }
    ],
    education: [
      {
        Type: "Graduation",
        University: "",
        Degree: "",
        Start: "",
        End: ""
      }
    ],
    skills: [
      { skillName: "Python" },
      { skillName: "Machine Learning" },
      { skillName: "MERN Stack" }
    ],
    selectedTemplate: "",
    imageFile: null,
    errorMessages: {},
    showErrorMessages: true,
    selectedNavItem: 'PersonalInfo',
  },

  reducers: {
    updatePersonalInfo: (state, { payload }) => {
      state.personalInfo[payload.key] = payload.value;
    },
    updateWorkEx: (state, { payload }) => {
      const { index, key, value } = payload;
      state.workEx[index][key] = value;
    },
    updateEducation: (state, { payload }) => {
      const { index, key, value } = payload;
      state.education[index][key] = value;
    },
    updateKeySkills: (state, { payload }) => {
      const { index, key, value } = payload;
      state.skills[index][key] = value;
    },
    updateState: (state, { payload }) => {
      const { key, value } = payload;
      state[key] = value;
    },
    updateErrorMessages: (state, { payload }) => {
      const { key, value, index } = payload;
      const errorKey = index ? `${key}_${index}` : key;
      state.errorMessages[errorKey] = value;
    },
    addArrayElement: (state, { payload }) => {
      state[payload.key].push(payload.element);
    },
    removeArrayElement: (state, { payload }) => {
      state[payload.key].pop();
    },
    updateSelectedNavItem: (state, action) => { 
      state.selectedNavItem = action.payload;
    },
  }
});

export const {
  updatePersonalInfo,
  updateWorkEx,
  updateEducation,
  updateKeySkills,
  updateErrorMessages,
  updateState,
  addArrayElement,
  removeArrayElement
} = dataStoreSlice.actions;

export const {updateSelectedNavItem } = dataStoreSlice.actions;

export default dataStoreSlice.reducer;
