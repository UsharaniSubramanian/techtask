package APIComp;

import com.sun.org.slf4j.internal.Logger;
import com.sun.org.slf4j.internal.LoggerFactory;
import utils.Utils;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;
import java.nio.charset.StandardCharsets;

public class RestClient {
    private static final Logger LOGGER= LoggerFactory.getLogger(RestClient.class);

    public static HttpURLConnection getHttpConnection(String urlString)
    {
        URL connectionUrl=null;
        HttpURLConnection httpURLConnection=null;
        try{
            connectionUrl=new URL(urlString);
            httpURLConnection= (HttpURLConnection) connectionUrl.openConnection();
        }catch(MalformedURLException e){
            LOGGER.error("Error occurred while forming HTTP URL String" + urlString);
        }
        catch(Exception e){
            LOGGER.error("Error occurred trying to open Connection"+ e.toString());
        }
        return httpURLConnection;
    }

    public static String readResponse(HttpURLConnection httpURLConnection) {
        BufferedReader bufferedReader=null;
        String response;
        try {
            bufferedReader = new BufferedReader(new InputStreamReader(httpURLConnection.getInputStream()));
        }catch(IOException e) {
            LOGGER.error("Error in reading the response"+ e.toString());
        }
        StringBuilder fullresponse=new StringBuilder();

        try {
            while ((response = bufferedReader.readLine()) != null) {
                fullresponse.append(response);
            }
        }catch(Exception e)
            {
                LOGGER.error("Error while reading from the connection stream"+e.toString());
        }
        try {
            bufferedReader.close();
        }catch(Exception e) {
            LOGGER.error("Could not successfully close teh Buffered Reader");
        }

        return fullresponse.toString();
    }

    public static String sendGETViaHttp(String data) {
        String responseMsg="";
        String urlString="";
        if(data.equals(""))
            urlString= Utils.API_URL;
        else
            urlString= Utils.API_URL+"/"+data;

        HttpURLConnection httpURLConnection=null;
        try {
            httpURLConnection=getHttpConnection(urlString);
            httpURLConnection.setRequestMethod("GET");
        }catch(ProtocolException e) {
            LOGGER.error("Protocol specific error while GET method");
        }catch(Exception e) {
            LOGGER.error("Error while trying to connect" + e.toString());
        }
        responseMsg=readResponse(httpURLConnection);
        return responseMsg;
    }

    public static String sendPOSTViaHTTP(String data) {
        String urlString=null;
        String responseMsg ="";
        HttpURLConnection httpURLConnection = null;
        try {
            urlString= Utils.API_URL;
            httpURLConnection=getHttpConnection(urlString);
            httpURLConnection.setRequestMethod("POST");
            httpURLConnection.setRequestProperty("Content-type", "application/json");
            httpURLConnection.setRequestProperty("charset", "UTF-8");
        } catch (Exception e) {
            e.printStackTrace();
        }
        httpURLConnection.setDoOutput(true);
        try (OutputStream os = httpURLConnection.getOutputStream()) {
            byte[] input = data.getBytes(StandardCharsets.UTF_8);
            os.write(input, 0, input.length);
        } catch (IOException e) {
            LOGGER.error("Error in sending request via POST method");
        } catch (Exception e) {
            LOGGER.error(e.toString());
        }
        responseMsg=readResponse(httpURLConnection);
        return responseMsg;
    }

}