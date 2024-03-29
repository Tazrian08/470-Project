<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('messages', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('sender_id');
            $table->foreign('sender_id')
                ->references('id') 
                ->on('users')
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->string('path')->default(NULL)->nullable();
            $table->unsignedBigInteger('chatbox_id');
            $table->foreign('chatbox_id')
                ->references('id') 
                ->on('chatboxes')
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->longText('message');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('messages');
    }
};
