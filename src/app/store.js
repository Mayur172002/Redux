import { configureStore } from "@reduxjs/toolkit";
import CategoriesSlice from "../Feature/Admin/CategoriesSlice";
import ProductSlice from "../Feature/Admin/ProductSlice";
import UserSlice from "../Feature/Website/Pages/UserSlice";
import Ad_UserSlice from "../Feature/Admin/Ad_UserSlice";

export default configureStore({
    reducer :{
        categories : CategoriesSlice,
        product : ProductSlice,
        user  :  UserSlice,
        aduser : Ad_UserSlice,
    }
})