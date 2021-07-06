package com.example.myapplication;

import android.content.Context;
import android.provider.ContactsContract;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;

public class CustomAdapter extends RecyclerView.Adapter<CustomAdapter.MyViewHolder> {

    private Context context;
    private ArrayList sympthome_id, sympthome_title, sympthome_description;

    CustomAdapter(Context context, ArrayList sympthome_id, ArrayList sympthome_title, ArrayList sympthome_description){
        this.context = context;
        this.sympthome_id = sympthome_id;
        this.sympthome_title = sympthome_title;
        this.sympthome_description = sympthome_description;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        LayoutInflater inflater = LayoutInflater.from(context);
        View view = inflater.inflate(R.layout.my_row, parent, false);
        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        holder.sympthome_id_txt.setText(String.valueOf(sympthome_id.get(position)));
        holder.sympthome_title_txt.setText(String.valueOf(sympthome_title.get(position)));
        holder.sympthome_description_txt.setText(String.valueOf(sympthome_description.get(position)));
    }

    @Override
    public int getItemCount() {
        return sympthome_id.size();
    }

    public class MyViewHolder extends  RecyclerView.ViewHolder {

        TextView sympthome_id_txt, sympthome_title_txt, sympthome_description_txt;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            sympthome_id_txt = itemView.findViewById(R.id.sympthome_id);
            sympthome_title_txt = itemView.findViewById(R.id.sympthome_title);
            sympthome_description_txt = itemView.findViewById(R.id.sympthome_description);
        }
    }
}
