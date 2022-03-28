import prismaClient from "../prisma";

class CreateHistoryService {
  async execute(history: string, user_id: string, title: string) {
    const textHistory = await prismaClient.history.create({
      data: {
        history,
        title,
        user_id,
      },
      include: {
        user: true,
      },
    });

    return textHistory;
  }
}

export { CreateHistoryService };