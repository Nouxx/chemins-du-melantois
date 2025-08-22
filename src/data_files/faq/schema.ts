import { z } from "zod";

const FrequentlyAskedQuestionSchema = z.strictObject({
  question: z.string(),
  answer: z.string(),
});

export type FrequentlyAskedQuestion = z.input<
  typeof FrequentlyAskedQuestionSchema
>;

export const FrequentlyAskedQuestionsSchema = z.array(
  FrequentlyAskedQuestionSchema,
);
