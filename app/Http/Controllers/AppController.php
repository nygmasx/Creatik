<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use Inertia\Response;
use YouTube\Exception\YouTubeException;
use YouTube\YouTubeDownloader;

class AppController extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function index(Request $request): Response
    {
        return Inertia::render('App/Index');
    }

    public function getUrl(Request $request): Response
    {
        $url = $request->all();

        $video = explode('=', $url['url']);
        $id = $video[1];
        $thumbnail_url = "https://img.youtube.com/vi/".$id."/maxresdefault.jpg";

        return Inertia::render('App/Index', [
            'thumbnail' => $thumbnail_url
        ]);
    }

    public function getVideo(Request $request): Response
    {
        $url = $request->input("url");

        $youtube = new YouTubeDownloader();

        try {
            $downloadOptions = $youtube->getDownloadLinks($url);

            if ($downloadOptions->getAllFormats()) {
               $result = $downloadOptions->getCombinedFormats()[1]->url;

               $response = Http::get($result);
               if ($response->successful()){
                   $fileName = 'video'.uuid_create().'.mp4';
                   $path = storage_path('videos/'. $fileName);
                   file_put_contents($path, $response->body());
               }else{
                   dd('NONONON');
               }

            } else {
                echo 'No links found';
            }

        } catch (YouTubeException $e) {
            echo 'Something went wrong: ' . $e->getMessage();
        }

        return Inertia::render('App/Index', [
        ]);
    }
}
