import {NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component'
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { VerHistorialComponent } from './pais/pages/ver-historial/ver-historial.component';


export const routes: Routes = [
    {//configuracion de la ruta principal
        path:'',
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {//ruta por region
        path:'region',
        component: PorRegionComponent
    },
    {//ruta por capital
        path:'capital',
        component: PorCapitalComponent
    }, 
    {//ruta para ver por id del pais
        path:'pais/:id',
        component: VerPaisComponent
    },
    {
        path:'historial',
        component: VerHistorialComponent
    }, 
    {//necesito procesar si la persona ingresa a una pagina de forma incorrecta, para eso es esta ruta
        path:'**',
        redirectTo:''
    }
];
@NgModule({
    imports:[
        //forRoute son las rutas principales, forChild es para las rutas hijas
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{}