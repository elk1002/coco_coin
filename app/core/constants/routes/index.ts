const ROUTES = {
  Landing: "/",
  Blogs: "/blogs",
  BlogDetails: (id: string) => ROUTES.Blogs + "/" + id,
  Auctions: "/auctions",
  AuctionDetails: (id: string) => ROUTES.Auctions + "/" + id,
  Posts: "/posts",
  PostDetails: (id: string) => ROUTES.Posts + "/" + id,
  Stores: "/stores",
  StoreDetails: (id: string) => ROUTES.Stores + "/" + id,
  AboutUs: "/aboutUs",
  ContactUs: "/aboutUs",
};
export default ROUTES;
