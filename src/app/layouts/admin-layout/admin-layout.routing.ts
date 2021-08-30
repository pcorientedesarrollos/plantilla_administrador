import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { DatosEmpresaComponent } from '../../datosEmpresa/datosEmpresa.component';
import { ProductosComponent } from '../../productos/productos.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
// import { UpgradeComponent } from '../../upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'datosEmpresa',   component: DatosEmpresaComponent },
    { path: 'productos',          component: ProductosComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
];
