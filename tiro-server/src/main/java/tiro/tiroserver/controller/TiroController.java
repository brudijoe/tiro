package tiro.tiroserver.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/tiro")
@RestController
public class TiroController {

    @CrossOrigin("http://localhost:3000")
    @GetMapping("/greeting")
    public String greeting() {
        return "Server is running";
    }
}
