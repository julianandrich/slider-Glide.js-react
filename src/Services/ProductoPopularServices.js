import axios from '../Config/axios';

export async function getNikeShoe(itemId) {
  return axios.get("/items/"+itemId)
}

// Nike Air Max
// MLA1128162407

// Nike Crater Impact
// MLA1114254646

// Nike Waffle One Crater
// MLA1132596113

// Nike Gts 97
// MLA1129812506

// Nike Air Jordan 1 Retro
// MLA1121217290h