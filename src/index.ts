import { AppDataSource } from './data-source';
import { User } from './entity/User';
import { Photo } from './entity/Photo';

AppDataSource.initialize()
  .then(async () => {
    console.log('Inserting a new user into the database...');
    const user = await AppDataSource.manager.findOneBy(User, {
      id: '5cbb09aa-2a37-46e6-b498-e751d72565c9',
    });
    user.firstName = 'Timber';
    user.lastName = 'Saw';
    user.age = 25;
    user.user_id = 'sonjinh0000';
    user.user_password = 'park9862@@';
    await AppDataSource.manager.save(user);

    const photo = new Photo();
    photo.id = 1;
    photo.name = 'hello';
    photo.description = "it's me";
    photo.filename = 'yo';
    photo.views = 10;
    photo.isPublished = true;
    await AppDataSource.manager.save(photo);
  })
  .catch((error) => console.log(error));
