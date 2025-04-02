<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Gender extends Model
{
    use HasFactory, notifiable;

    protected $table = 'tbl_genders';
    protected $primaryKey = 'gender_id';
    protected $fillable = [
        'gender',
        'is_deleted',
    ];

    public function users(): HasMany
    {
        return $this->hasMany(User::class, 'gender_id', 'gender_id');
    }
}
