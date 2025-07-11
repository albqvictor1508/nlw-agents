import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { db } from "../db/client.ts";
import { schema } from "../db/schema/index.ts";

export const getRoomsRoute: FastifyPluginAsyncZod = async (app) => {
  app.get("/rooms", (request, reply) => {
    const rooms = db.select({ id: schema.rooms.id, name: schema.rooms.name }).from(schema.rooms).orderBy(schema.rooms.createdAt);
    return reply.status(200).send(rooms);
  });
}; 
