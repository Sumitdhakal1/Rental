import RentSpace from "../models/rentSpace";

export const getAllRentSpace = async (query) => {
  const {
    page = 1,
    limit = 10,
    search = "",
    sort = "createdAt",
    order = "desc",
  } = query;

  let where = {};

  if (search) {
    where.$or = [
      { title: { $regex: search, $options: "i" } },
      { "address.city": { $regex: search, $options: "i" } },
    ];
  }
  const total = await RentSpace.countDocuments(where);
  const totalPages = Math.ceil(total / limit);
  const rentSpace = await RentSpace.find(where)
    .skip((page - 1) * limit)
    .limit(limit)
    .sort({ [sort]: order });
  return {
    rentSpace,
    total,
    limit: +limit,
    totalPages,
  };
};
