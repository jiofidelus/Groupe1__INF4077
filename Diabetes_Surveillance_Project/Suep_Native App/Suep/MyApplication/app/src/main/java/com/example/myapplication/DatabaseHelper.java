package com.example.myapplication;

import android.content.ContentResolver;
import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.widget.Toast;

public class DatabaseHelper extends SQLiteOpenHelper {
    Context context;
    public static  final String DATABASE_NAME = "sue.db";
    public static final String TABLE_NAME = "patients"; //table pour les patients
    public static final String TABLE_SYMPTHOMES = "sympthomes"; //table pour enregistrer les symthomes

    //champs pour la table des patients
    public static final String COL1 = "ID";
    public static final String COL2 = "NAME";
    public static final String COL3 = "PRENAME";
    public static final String COL4 = "TELEPHONE";
    public static final String COL5 = "EMAIL";
    public static final String COL6 = "dateOfBirth";
    public static final String COL7 = "city";
    public static final String COL8 = "quater";

    //champs pour la table des sympthomes
    public static final String ID = "ID";
    public static final String TITLE = "title";
    public static final String DESCRIPTION = "description";


    public  DatabaseHelper(Context context) {
        super(context, DATABASE_NAME, null,1);
        this.context = context;
    }

    @Override
    public void onCreate(SQLiteDatabase db) {
        String CreateTable = "CREATE TABLE " + TABLE_NAME + " (ID INTEGER PRIMARY KEY AUTOINCREMENT, " +
                "NAME TEXT, " + "PRENAME TEXT, " + "TELEPHONE TEXT, " + "EMAIL TEXT, " + "dateOfBirth TEXT, "
                + "city TEXT, " + "quater TEXT)";

        String CreateSymthomes = "CREATE TABLE " + TABLE_SYMPTHOMES + " (ID INTEGER PRIMARY KEY AUTOINCREMENT, " +
                "title TEXT, " + "description TEXT)";

        db.execSQL(CreateTable);
        db.execSQL(CreateSymthomes);
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        db.execSQL("DROP TABLE IF EXISTS " + TABLE_NAME);
        db.execSQL("DROP TABLE IF EXISTS " + TABLE_SYMPTHOMES);
        onCreate(db);
    }

    /***** DEBUT PATIENT *****/
    //ajouter un nouveau patient
    public boolean addData(String item1, String item2, String item3, String item4, String item5, String item6, String item7){
        SQLiteDatabase db = this.getWritableDatabase();
        ContentValues contentValues = new ContentValues();
        contentValues.put(COL2, item1);
        contentValues.put(COL3, item2);
        contentValues.put(COL4, item3);
        contentValues.put(COL5, item4);
        contentValues.put(COL6, item5);
        contentValues.put(COL7, item6);
        contentValues.put(COL8, item7);

        long result = db.insert(TABLE_NAME, null, contentValues);
        if(result == -1){
            return false;
        }
        else{
            return true;
        }
    }

    //recuperer la liste de tout les patients
    public Cursor getListContents() {
        SQLiteDatabase db = this.getWritableDatabase();
        Cursor data = db.rawQuery("SELECT * FROM " + TABLE_NAME, null);
        return data;
    }

    //recupere le nombre de cas dans chaque ville
    public Cursor getListCity() {
        SQLiteDatabase db = this.getWritableDatabase();
        Cursor data = db.rawQuery("SELECT city, COUNT(*) FROM " + TABLE_NAME + " GROUP BY city", null);
        return data;
    }

    /** fin patient **/

    /** DEBUT SYMPTHOMES technique **/

        public void insertSympthomes(String title, String description){
            SQLiteDatabase db = this.getWritableDatabase();
            ContentValues cValues = new ContentValues();
            cValues.put(TITLE, title);
            cValues.put(DESCRIPTION, description);

            long result = db.insert(TABLE_SYMPTHOMES, null, cValues);
            if(result == -1){
                Toast.makeText(context, "failed",Toast.LENGTH_SHORT).show();
            }else{
                Toast.makeText(context, "Sympthomes enregistré",Toast.LENGTH_SHORT).show();
            }
        }
        //reuperer tout les sythomes

        public Cursor readAllSympthome(){
            String query = "SELECT * FROM " + TABLE_SYMPTHOMES;
            SQLiteDatabase db = this.getReadableDatabase();

            Cursor cursor = null;
            if(db != null) {
                cursor = db.rawQuery(query, null);
            }

            return cursor;
        }

    /** fin sympthomes **/


}
