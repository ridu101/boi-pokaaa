const getStoredData = (key) => {
  const storedData = localStorage.getItem(key);

  if (storedData) {
    return JSON.parse(storedData);
  }

  return [];
};

// Read List
const getStoreBook = () => {
  return getStoredData("readList");
};

const addToStoreDB = (id) => {
  const storedBookData = getStoreBook();
  const bookId = Number(id);

  if (storedBookData.includes(bookId)) {
    return false;
  }

  storedBookData.push(bookId);

  localStorage.setItem(
    "readList",
    JSON.stringify(storedBookData)
  );

  return true;
};

// Wish List
const getStoredWishList = () => {
  return getStoredData("wishList");
};

const addToWishList = (id) => {
  const storedWishList = getStoredWishList();
  const bookId = Number(id);

  if (storedWishList.includes(bookId)) {
    return false;
  }

  storedWishList.push(bookId);

  localStorage.setItem(
    "wishList",
    JSON.stringify(storedWishList)
  );

  return true;
};

export {
  addToStoreDB,
  getStoreBook,
  addToWishList,
  getStoredWishList,
};