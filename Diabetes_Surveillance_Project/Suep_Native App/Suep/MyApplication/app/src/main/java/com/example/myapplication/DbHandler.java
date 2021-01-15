package com.example.myapplication;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import java.util.ArrayList;
import java.util.HashMap;

public class DbHandler extends SQLiteOpenHelper {
    private static  final int DB_VERSION = 1;
    private static final String DB_NAME = "suep";
    private static final String TABLE_Patients = "patientsdetails";
    private static final String KEY_ID = "id";
    private static final String KEY_NAME = "name";
    private static final String KEY_PRENAME = "prename";
    private static final String KEY_TELEPHONE = "telephone";
    private  static final String KEY_EMAIL = "email";
    private static final String KEY_DOB = "dateOfBirth";
    private static final String KEY_CITY = "city";
    private static final String KEY_QUATER = "quater";


    public DbHandler(Context context){
        super(context,DB_NAME, null, DB_VERSION);
    }
    @Override
    public void onCreate(SQLiteDatabase db) {
        String CREATE_TABLE = "CREATE TABLE " + TABLE_Patients + "(" + KEY_ID + " INTEGER PRIMARY KEY AUTOINCREMENT," +
                KEY_NAME + " TEXT," + KEY_PRENAME + " TEXT," + KEY_TELEPHONE + " TEXT," + KEY_EMAIL + " TEXT," + KEY_DOB + " TEXT," +
                KEY_CITY + " TEXT," + KEY_QUATER + " TEXT" + ")";
        db.execSQL(CREATE_TABLE);
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        //drop older table if exist
        db.execSQL("DROP TABLE IF EXISTS " + TABLE_Patients);
        //CREATE TABLE AGAIN
        onCreate(db);
    }

    /*CRUD operations*/

    //adding new patients
    void InsertPatientsDetails(String name, String prename, String telephone, String email, String dateOfBirth,
                               String city, String quater){
        //Get the data repository in write mode
        SQLiteDatabase db = this.getWritableDatabase();
        //reference of elements in the database
        ContentValues cValues = new ContentValues();
        cValues.put(KEY_NAME, name);
        cValues.put(KEY_PRENAME, prename);
        cValues.put(KEY_TELEPHONE, telephone);
        cValues.put(KEY_EMAIL, email);
        cValues.put(KEY_DOB, dateOfBirth);
        cValues.put(KEY_CITY, city);
        cValues.put(KEY_QUATER, quater);
        //insert the new row in the table
        long newRowId = db.insert(TABLE_Patients, null, cValues);
    }

    //Get User details
    public ArrayList<HashMap<String, String>> GetPatients() {
        SQLiteDatabase db = this.getWritableDatabase();
        ArrayList<HashMap<String, String>> patientList = new ArrayList<>();
        String query = "SELECT * FROM " + TABLE_Patients;
        Cursor cursor = db.rawQuery(query,null);
        while (cursor.moveToNext()){
            HashMap<String,String> patient = new HashMap<>();
            patient.put("name",cursor.getString(cursor.getColumnIndex(KEY_NAME)));
            patient.put("prename",cursor.getString(cursor.getColumnIndex(KEY_PRENAME)));
            patient.put("telephone",cursor.getString(cursor.getColumnIndex(KEY_TELEPHONE)));
            patient.put("email",cursor.getString(cursor.getColumnIndex(KEY_EMAIL)));
            patient.put("date of birth",cursor.getString(cursor.getColumnIndex(KEY_DOB)));
            patient.put("city",cursor.getString(cursor.getColumnIndex(KEY_CITY)));
            patient.put("Quater",cursor.getString(cursor.getColumnIndex(KEY_QUATER)));
            patientList.add(patient);
        }
        return  patientList;
    }

    // Get User Details based on userid
    public ArrayList<HashMap<String, String>> GetUserByUserId(int patientid) {
        SQLiteDatabase db = this.getWritableDatabase();
        ArrayList<HashMap<String, String>> patientList = new ArrayList<>();
        String query = "SELECT * FROM " + TABLE_Patients;
        Cursor cursor = db.query(TABLE_Patients, new String[]{KEY_NAME, KEY_PRENAME, KEY_TELEPHONE, KEY_EMAIL,
                KEY_DOB, KEY_CITY, KEY_QUATER}, KEY_ID + "=?", new String[]{String.valueOf(patientid)}, null, null, null, null);
        if (cursor.moveToNext()) {
            HashMap<String, String> user = new HashMap<>();
            user.put("name", cursor.getString(cursor.getColumnIndex(KEY_NAME)));
            user.put("prename", cursor.getString(cursor.getColumnIndex(KEY_PRENAME)));
            user.put("telephone", cursor.getString(cursor.getColumnIndex(KEY_TELEPHONE)));
            user.put("date of birth", cursor.getString(cursor.getColumnIndex(KEY_DOB)));
            user.put("city", cursor.getString(cursor.getColumnIndex(KEY_CITY)));
            user.put("Quater", cursor.getString(cursor.getColumnIndex(KEY_QUATER)));
            patientList.add(user);
        }
        return patientList;
    }

    // Delete User Details
    public void DeleteUser(int patientid){
        SQLiteDatabase db = this.getWritableDatabase();
        db.delete(TABLE_Patients, KEY_ID+" = ?",new String[]{String.valueOf(patientid)});
        db.close();
    }

    /* Update User Details
    public int UpdateUserDetails(String name, String prename, String email, int telephone, String dateOfBirth, int id){
        SQLiteDatabase db = this.getWritableDatabase();
        ContentValues cVals = new ContentValues();
        cVals.put(KEY_LOC, location);
        cVals.put(KEY_DESG, designation);
        int count = db.update(TABLE_Users, cVals, KEY_ID+" = ?",new String[]{String.valueOf(id)});
        return  count;
    }*/
}
