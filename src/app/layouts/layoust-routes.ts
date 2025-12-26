import { Route, Routes } from "@angular/router";
import { MainLayout } from "./components/main-layout/main-layout";
import { LangingPage } from "../features/components/langing-page/langing-page";
import { ProductPage } from "../features/components/product-page/product-page";

export const layoutsRoutes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: '',
                component: LangingPage
            },
            {
                path: 'product/:id',
                component: ProductPage
            }
        ]
    }
]