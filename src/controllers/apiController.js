import ApiService from "../services/ApiService.js";
import { NumberProperties } from "../services/NumberPropertiesService.js";

class APIController {
  async classifyNumber(req, res) {
    try {
      let { number } = req.query;

      if (!number) {
        return res.status(400).json({ error: "Number is required" });
      }

      number = parseInt(number, 10);

      if (isNaN(number)) {
        return res.status(400).json({ error: true, number: "alphabet" });
      }

      const numberProperties = new NumberProperties(number);

      const { text } = await ApiService.get(`/${number}/math?json`);

      res.json({
        number,
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
