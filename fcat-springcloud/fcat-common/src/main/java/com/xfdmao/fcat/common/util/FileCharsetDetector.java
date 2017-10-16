package com.xfdmao.fcat.common.util;

import java.io.BufferedInputStream;
import java.io.FileInputStream;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.mozilla.intl.chardet.nsDetector;
import org.mozilla.intl.chardet.nsICharsetDetectionObserver;

public class FileCharsetDetector {
	private static final Logger LOG = LogManager.getLogger(FileCharsetDetector.class);
	private boolean found = false;
	private String encoding = null;

	public static String getFileEncod(String filePath) {
		return new FileCharsetDetector().getFileEncodeDo(filePath);
	}

	private String getFileEncodeDo(String filePath) {
		BufferedInputStream bis = null;
		try {
			nsDetector det = new nsDetector();
			det.Init(new nsICharsetDetectionObserver() {
				public void Notify(String charset) {
					encoding = charset;
					found = true;
				}
			});

			bis = new BufferedInputStream(new FileInputStream(filePath));
			byte[] buf = new byte[1024];
			int len;
			boolean done = false;
			boolean isAscii = false;

			while ((len = bis.read(buf, 0, buf.length)) != -1) {
				// Check if the stream is only ascii.
				isAscii = det.isAscii(buf, len);
				if (isAscii) {
					break;
				}
				// DoIt if non-ascii and not done yet.
				done = det.DoIt(buf, len, false);
				if (done) {
					break;
				}
			}
			det.DataEnd();

			if (isAscii) {
				encoding = "ASCII";
				found = true;
			}

			if (!found) {
				String[] prob = det.getProbableCharsets();
				// 这里将可能的字符集组合起来返回
				for (int i = 0; i < prob.length; i++) {
					if (i == 0) {
						encoding = prob[i];
						return encoding;
					} else {
						encoding += "," + prob[i];
					}
				}

				if (prob.length > 0) {
					// 在没有发现情况下,也可以只取第一个可能的编码,这里返回的是一个可能的序列
					return encoding;
				} else {
					return null;
				}
			}
		} catch (Exception e) {
			LOG.error(e);
		} finally {
			if (bis != null)
				try {
					bis.close();
				} catch (Exception e) {
				}
		}
		return encoding;
	}
}
