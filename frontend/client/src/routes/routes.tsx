import type { ReactNode } from "react";
import About from "../pages/About";
import { DefaultLayout } from "../layouts/Client";


export interface IRoute {
    path: string;
    layout?: () => ReactNode;
    middleware?: () => ReactNode;
    element?: () => ReactNode;
    pages?: IRoute[];
}

export const routes: IRoute[] = [
    {
        path: "/",
        layout: () => <DefaultLayout />,
        pages: [
            {
                path: "/about",
                element: () => <About />,
            },
        ],
    },
];
