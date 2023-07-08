import { lazy } from 'react';

export { default as Home } from './Home';
export const Login = lazy(() => import("./Login"));
export const Signup = lazy(() => import("./Signup"));
export const Contact = lazy(() => import("./Contact"));
export const Wishlist = lazy(() => import("./Wishlist"));
export const Compare = lazy(() => import("./Compare"));
export const Notfound = lazy(() => import("./Notfound"));
export { default as ProductDetails } from './ProductDetails/ProductDetails';