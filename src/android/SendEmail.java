package com.spoon.soapapi;

import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.ServiceConnection;
import android.os.Build;
import android.os.IBinder;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;

public class SendEmail extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
        try {
            if (action.equalsIgnoreCase("initManager")) {
                this.initManager(args.get(0).toString(), callbackContext);
                return true;
            }

            if (action.equalsIgnoreCase("send")) {
                this.send();
                callbackContext.success();
                return true;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return true;
    }

    private void initManager(String options, final CallbackContext callbackContext) throws IllegalStateException {
        //Log.e("tagy", options);
    }

    private void send(){
        this.connect();
    }

    private void connect(){

    }
}
