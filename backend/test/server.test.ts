import { server } from "../src/server"
import Prisma from "../src/db";
import { MockContext, Context, createMockContext } from '../context'

let mockCtx: MockContext
let ctx: Context

beforeEach(() => {
  mockCtx = createMockContext()
  ctx = mockCtx as unknown as Context
})

test('should create new card ', async () => {
  const created_date = new Date();
  const scheduled_date = new Date();
  const card = {
    id: "1",
    title: 'test',
    description: 'test',
    created_at: created_date,
    scheduled_for: scheduled_date,
  }
  mockCtx.prisma.entry.create.mockResolvedValue(card)

  await expect(Prisma.entry.create({data: card})).resolves.toEqual({
    id: "1",
    title: 'test',
    description: 'test',
    created_at: created_date,
    scheduled_for: scheduled_date,
  })
})

/*
test('should delete card ', async () => {
  const created_date = new Date();
  const scheduled_date = new Date();
  const card = {
    id: "1",
    title: 'test',
    description: 'test',
    created_at: created_date,
    scheduled_for: scheduled_date,
  }
  mockCtx.prisma.entry.create.mockResolvedValue(card)

  await expect(Prisma.entry.create({data: card})).resolves.toEqual({
    id: "1",
    title: 'test',
    description: 'test',
    created_at: created_date,
    scheduled_for: scheduled_date,
  })

})
*/

/*
test('should update card ', async () => {
  const created_date = new Date();
  const scheduled_date = new Date();
  const card = {
    id: "1",
    title: 'test',
    description: 'test',
    created_at: created_date,
    scheduled_for: scheduled_date,
  }
  mockCtx.prisma.entry.update.mockResolvedValue(card)
  await Prisma.entry.create({data: card});

  const updated = {
    id: "1",
    title: 'updated',
    description: 'test',
    created_at: created_date,
    scheduled_for: scheduled_date,
  }

  await expect(Prisma.entry.update({data: updated, where: {id: card.id}})).resolves.toEqual({
    id: "1",
    title: 'updated',
    description: 'test',
    created_at: created_date,
    scheduled_for: scheduled_date,
  })
})
*/