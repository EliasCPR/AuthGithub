import prismaClient from "../prisma";

class GetHistorysService {
  async execute() {
    const historys = await prismaClient.history.findMany({
      include: {
        user: true,
      },
    });

    return historys;
  }
}

export { GetHistorysService };
