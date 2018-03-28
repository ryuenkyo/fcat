package com.xfdmao.fcat.user.util;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import com.alibaba.fastjson.JSONObject;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
/**
 * Created by Administrator on 2018/3/28.
 */
public class ReadWriteExcel {

    private static final String EXCEL_XLS = "xls";
    private static final String EXCEL_XLSX = "xlsx";

    /**
     * 判断Excel的版本,获取Workbook
     * @param in
     * @param file
     * @return
     * @throws IOException
     */
    public static Workbook getWorkbok(InputStream in,File file) throws IOException{
        Workbook wb = null;
        if(file.getName().endsWith(EXCEL_XLS)){  //Excel 2003
            wb = new HSSFWorkbook(in);
        }else if(file.getName().endsWith(EXCEL_XLSX)){  // Excel 2007/2010
            wb = new XSSFWorkbook(in);
        }
        return wb;
    }

    /**
     * 判断文件是否是excel
     * @throws Exception
     */
    public static void checkExcelVaild(File file) throws Exception{
        if(!file.exists()){
            throw new Exception("文件不存在");
        }
        if(!(file.isFile() && (file.getName().endsWith(EXCEL_XLS) || file.getName().endsWith(EXCEL_XLSX)))){
            throw new Exception("文件不是Excel");
        }
    }

    /**
     * 读取Excel测试，兼容 Excel 2003/2007/2010
     */
    public static List<JSONObject>  getList(File excelFile)  {
        List<JSONObject> result = new ArrayList<JSONObject>();
        try {
            // 同时支持Excel 2003、2007
            FileInputStream is = new FileInputStream(excelFile); // 文件流
            checkExcelVaild(excelFile);
            Workbook workbook = getWorkbok(is,excelFile);
            //Workbook workbook = WorkbookFactory.create(is); // 这种方式 Excel2003/2007/2010都是可以处理的

            int sheetCount = workbook.getNumberOfSheets(); // Sheet的数量
            /**
             * 设置当前excel中sheet的下标：0开始
             */
            Sheet sheet = workbook.getSheetAt(0);   // 遍历第一个Sheet

            // 为跳过第一行目录设置count
            int count = 0;

            for (Row row : sheet) {
                JSONObject jsonObject = new JSONObject();
                // 跳过第一行的目录
                if(count == 0){
                    count++;
                    continue;
                }
                // 如果当前行没有数据，跳出循环
                if(row.getCell(0).toString().equals("")){
                    return result;
                }
                String rowValue = "";
                int rowCount = 1;
                for (Cell cell : row) {
                    cell.setCellType(Cell.CELL_TYPE_STRING);
                    if(cell.toString() == null){
                        continue;
                    }
                    String cellValue = "";
                    jsonObject.put(rowCount+"",cell.getStringCellValue());
                    rowCount++;
                }
                result.add(jsonObject);
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally{
        }
        return result;
    }
}
