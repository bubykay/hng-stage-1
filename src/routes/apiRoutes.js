import express from "express";
import APIController from "../controllers/apiController.js";

const router = express.Router();

/**
 * @swagger
 * /api/classify-number:
 *   get:
 *     summary: Classify a given number
 *     description: This endpoint classifies a number and provides mathematical properties, digit sum, and a fun fact.
 *     parameters:
 *       - in: query
 *         name: number
 *         required: true
 *         schema:
 *           type: integer
 *         description: The number to classify
 *     responses:
 *       200:
 *         description: Successful classification of the number
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 number:
 *                   type: integer
 *                   example: 42
 *                 is_prime:
 *                   type: boolean
 *                   example: false
 *                 is_perfect_square:
 *                   type: boolean
 *                   example: false
 *                 properties:
 *                   type: array
 *                   items:
 *                     type: string
 *                     example: "even"
 *                   example: ["even"]
 *                 digit_sum:
 *                   type: integer
 *                   example: 6
 *                 fun_fact:
 *                   type: string
 *                   example: "42 is the answer to the ultimate question of life, the universe, and everything."
 *       400:
 *         description: Missing or invalid number parameter
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Number is required"
 *       500:
 *         $ref: "#/components/responses/ServerError"
 * components:
 *   responses:
 *     ServerError:
 *       description: Internal server error
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               error:
 *                 type: string
 *                 example: "Internal Server Error"
 */

router.get("/classify-number", (req, res) =>
  APIController.classifyNumber(req, res)
);

export default router;
