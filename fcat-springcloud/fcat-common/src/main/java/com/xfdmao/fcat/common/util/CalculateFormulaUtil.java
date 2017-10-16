package com.xfdmao.fcat.common.util;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

import bsh.Interpreter;

public class CalculateFormulaUtil {
	private static final Logger LOG = LogManager.getLogger(CalculateFormulaUtil.class);
	private CalculateFormulaUtil() {
	}
	public static String calculate(String calculateFormula) {
		try {
			Interpreter interpreter = new Interpreter();
			// 对公式求值，并得到结果
			interpreter.eval("sal = " + calculateFormula);
			return interpreter.get("sal").toString();

		} catch (Exception e) {
			LOG.error("calculateFormula：" + calculateFormula, e);
		}
		return "";
	}
}
