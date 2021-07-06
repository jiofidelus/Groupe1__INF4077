package com.example.myapplication;

import androidx.fragment.app.FragmentActivity;

import android.os.Bundle;

import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.MarkerOptions;

public class MapsActivity extends FragmentActivity implements OnMapReadyCallback {

    private GoogleMap mMap;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_maps);
        // Obtain the SupportMapFragment and get notified when the map is ready to be used.
        SupportMapFragment mapFragment = (SupportMapFragment) getSupportFragmentManager()
                .findFragmentById(R.id.map);
        mapFragment.getMapAsync(this);
    }

    /**
     * Manipulates the map once available.
     * This callback is triggered when the map is ready to be used.
     * This is where we can add markers or lines, add listeners or move the camera. In this case,
     * we just add a marker near Sydney, Australia.
     * If Google Play services is not installed on the device, the user will be prompted to install
     * it inside the SupportMapFragment. This method will only be triggered once the user has
     * installed Google Play services and returned to the app.
     */
    @Override
    public void onMapReady(GoogleMap googleMap) {
        mMap = googleMap;
        // Add a marker in Yaounde and move the camera
        LatLng chuYaounde = new LatLng(3.863212572632019, 11.497202528074194);
        LatLng centralHospitalYaounde = new LatLng(3.871255293040369, 11.510426383286989);
        LatLng centrePasteur = new LatLng(3.872266884066907, 11.511386667941895);
        LatLng hopitalGeneral = new LatLng(3.9071662829804397, 11.542086225614531);
        LatLng genico = new LatLng(3.907819220596098, 11.53940401712668);
        LatLng hopitalDjoungolo = new LatLng(3.88364902281552, 11.520266121255256);
        LatLng hopitalCiteVerte = new LatLng(3.877531933062619, 11.48974772990604);
        LatLng hopitalBiyemassi = new LatLng(3.8378931555102365, 11.485277481671247);

        mMap.addMarker(new MarkerOptions().position(chuYaounde).title("CHU de Yaounde"));
        mMap.addMarker(new MarkerOptions().position(centralHospitalYaounde).title("Hopital central de Yaounde"));
        mMap.addMarker(new MarkerOptions().position(centrePasteur).title("Centre Pasteur"));
        mMap.addMarker(new MarkerOptions().position(hopitalGeneral).title("Hopital général"));
        mMap.addMarker(new MarkerOptions().position(genico).title("Hopital gyneco"));
        mMap.addMarker(new MarkerOptions().position(hopitalDjoungolo).title("Hopital EPC djoungolo"));
        mMap.addMarker(new MarkerOptions().position(hopitalCiteVerte).title("Hopital cité verte"));
        mMap.addMarker(new MarkerOptions().position(hopitalBiyemassi).title("Hopital de district de Biyemassi"));


        mMap.moveCamera(CameraUpdateFactory.newLatLng(chuYaounde));
    }
}