import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export async function GET(req, res) {
   const api = new WooCommerceRestApi({
      url: "http://localhost:10003",
      consumerKey: "ck_c98a996dae9dd197a6dac25cc0e01c0ae1bd6adf",
      consumerSecret: "cs_f98e0748a470ef9f4443a7642acc8e7f6e9bb028",
      version: "wc/v3",
   });

   try {
      const { data } = await api.get("products", {
         per_page: 20, // 20 products per page
      });
      return Response.json(data);
   } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({ error: "Failed to fetch products" });
   }
}
