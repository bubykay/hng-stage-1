import ApiService from "../services/ApiService.js";
import { NumberProperties } from "../services/NumberPropertiesService.js";

class APIController {
  async classifyNumber(req, res) {
    try {
      const { number } = req.query;
      const cleanNumber = number.trim();

      if (!cleanNumber) {
        return res.status(400).json({ error: "Number parameter is required" });
      }

      const intNumber = parseInt(cleanNumber, 10);

      const validIntegerRegex = /^-?\d+$/;

      if (!validIntegerRegex.test(intNumber) || isNaN(intNumber)) {
        return res.status(400).json({ error: true, number });
      }

      const numberProperties = new NumberProperties(intNumber);

      const { text } = await ApiService.get(`/${intNumber}/math?json`);

      res.json({
        number: intNumber,
        is_prime: numberProperties.isPrime(),
        is_perfect: numberProperties.isPerfectSquare(),
        properties: [
          numberProperties.isArmstrong() ? "armstrong" : null,
          numberProperties.isOdd() ? "odd" : null,
          numberProperties.isEven() ? "even" : null,
        ].filter(Boolean),
        digit_sum: numberProperties.digitsSum(),
        fun_fact: text,
      });
    } catch (error) {
      console.error("Error in classifyNumber:", error); // log the error to an error tracking service
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new APIController();
