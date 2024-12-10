import { Router } from 'express';
import routerControllerAdapter from '../adapter/router-controller-adapter';
import { container } from 'tsyringe';
import { IController } from '@/infra/protocols/IController';
import { ListOneUserController } from '../controllers/user/list-one-user-controller copy';
import { CreateOneUserController } from '../controllers/user/create-one-user-controller';
import { SyncPullUserController } from '../controllers/user/sync-pull-user-controller';

const controllerListOne = container.resolve<IController>(ListOneUserController);
const controllerCreateOne = container.resolve<IController>(CreateOneUserController);
const controllerSyncUser = container.resolve<IController>(SyncPullUserController);

export default async (router: Router) => {
  router.get('/users', routerControllerAdapter(controllerListOne));
  router.post('/users', routerControllerAdapter(controllerCreateOne));
  router.post('/users/sync', routerControllerAdapter(controllerSyncUser));
};
