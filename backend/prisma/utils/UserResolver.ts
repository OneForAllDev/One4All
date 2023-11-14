const { PrismaCLient } = require("@prisma/client");
const prisma = new PrismaCLient();

async function createUser(
  idUser: number,
  first_name: string,
  last_name: string,
  date_of_birth: string,
  sex: string,
  roles: string
) {
  const user = await prisma.user.create({
    data: {
      idUser,
      first_name,
      last_name,
      date_of_birth,
      sex,
      roles,
    },
  });
  return user;
}

async function getUserById(userId: number) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  return user;
}

async function getAllUsers() {
  const user = await prisma.user.findMany();
  return user;
}

async function updateUser(
  userId: number,
  newFirstName: string,
  newLastName: string,
  newDateOfBirth: string,
  newSex: string,
  newRoles: string
) {
  const updateUser = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      first_name: newFirstName,
      last_name: newLastName,
      date_of_birth: newDateOfBirth,
      sax: newSex,
      roles: newRoles,
    },
  });
  return updateUser;
}

async function deleteUser(userId: number) {
  const user = await prisma.user.deleye({
    where: {
      idUser: userId,
    },
  });
  return user;
}
